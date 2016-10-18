<?php
/**
 * Created by PhpStorm.
 * User: wnsonsa
 * Date: 24/05/16
 * Time: 20:26
 */

$module = $Params['Module'];
$http = eZHTTPTool::instance();

$tpl = eZTemplate::factory();
$error = '';
$create = false;
if(!$http->hasPostVariable('parent_node_id')){
    $error = 'erreur système';
    echo json_encode(['valid'=>false,'error'=>$error]);
    eZExecution::cleanExit();
}

$parent_node_id = $http->postVariable('parent_node_id');
$node = eZContentObjectTreeNode::fetch($parent_node_id);
if( $node instanceof eZContentObjectTreeNode ) {
    $contentobject_id = $node->attribute('contentobject_id');
}

if( !$http->hasPostVariable('titrePhoto') ||
    !$_FILES['photo'] )
{
    $error = 'Tous les champs sont obligatoires';
    //$http->redirect($node->attribute('url_alias'),array('error'=>$error));
    echo json_encode(['valid'=>false,'error'=>$error]);
    eZExecution::cleanExit();
}

$parent_node_id = $http->postVariable('parent_node_id');
$titre          = $http->postVariable('titrePhoto');
$photo          = $_FILES['photo']['tmp_name'];
$file_type      = $_FILES['photo']['type'];
$file_size      = $_FILES['photo']['size'];

move_uploaded_file( $_FILES["photo"]["tmp_name"], "tmp/" . $_FILES['photo']['name']);

$video_size_max = 10485760; // 10Mo
$image_size_max = 2097152;  // 2Mo

$description    = '';

if( !$http->hasPostVariable('description'))
{
    $description    = $http->postVariable('description');
}

$class_identifier = '';
if( exif_imagetype($photo) != false && $file_size < $image_size_max)
{
    $class_identifier = 'image';
}
elseif ((($file_type == "video/webm") || ($file_type == "video/mp4") || ($file_type == "video/ogv")) && $file_size < $video_size_max )
{
    $class_identifier = 'video';
}
else
{
    $error = 'erreur de fichier';
    eZExecution::cleanExit();
    //$http->redirect($node->attribute('url_alias'),array('error'=>$error));
}

if($class_identifier == 'image' || $class_identifier == 'video')
{
    $params['class_identifier'] = $class_identifier;
    $params['parent_node_id'] = $parent_node_id;
    $params['creator_id'] = $contentobject_id;

    $attributes = array();
    $attributes['name'] = $titre;
    if($class_identifier == 'image') {
        $attributes['image'] = $photo;
    }
    else {
        $attributes['file'] = $photo;
    }

    $attributes['caption'] = $description;

    $params['attributes'] = $attributes;

    $response = eZContentFunctions::createAndPublishObject($params);

    //$http->redirect($node->attribute('url_alias'),array('error'=>$error));
    echo json_encode(['valid'=>true,'error'=>$error,'success'=>'votre publication a bien été pris en compte']);
    eZExecution::cleanExit();
}

eZExecution::cleanExit();