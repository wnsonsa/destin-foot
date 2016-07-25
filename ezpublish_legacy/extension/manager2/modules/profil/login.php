<?php
/**
 * Created by PhpStorm.
 * User: wnsonsa
 * Date: 24/05/16
 * Time: 20:26
 */

$module = $Params['Module'];
$object_id = 139;
if(!empty($object_id)) {
    $postObject = eZContentObject::fetch($object_id);
    if ( $postObject instanceof eZContentObject) {
        $db = eZDB::instance();
        $data_map = $postObject->attribute('data_map');
        $eztags = $data_map['eztags']->attribute('content')->tags();
        foreach ($eztags as $tag) {
            $keywords[] = $tag->attribute('keyword');
        }
        $tags = implode(',',$keywords);
        $currentUser = eZUser::currentUser();
        $groups = implode(',',$currentUser->attribute('groups'));

        $insert = "INSERT INTO vue ( object_id, tag, group_ids) VALUES ( $object_id, '$tags', '$groups');";
        $db->query($insert);
        die();
    }
}

$http = eZHTTPTool::instance();
$tpl = eZTemplate::factory();
$ini = eZINI::instance();
$error = null;
$login = false;

if ( !empty($http->postVariable('username')) && !empty($http->postVariable('password'))) {
    $username          = $http->postVariable('username');
    $password       = $http->postVariable('password');

    $user = eZUser::loginUser($username, $password);

    if ( $user instanceof eZUser )
    {
        var_dump($user);
        eZUser::updateLastVisit( $user->attribute( 'contentobject_id' ) );
        eZUser::setCurrentlyLoggedInUser( $user, $user->attribute( 'contentobject_id' ) );

        $redirectionURI = $ini->variable( 'SiteSettings', 'DefaultPage' );
        return $Module->redirectTo( $redirectionURI );
    }
    else{
        var_dump("ERROR");
        $error = "login/mot de passe inconnu";
    }
}
else {
    $currentUser = eZUser::currentUser();
    $groups = $currentUser->groups();
    $classId = $currentUser->attribute('contentobject')->attribute('contentclass_id');

    //si user est joueur ou recruteur, on redirige sur la home
    if (in_array($classId,array('40','41'))) {
        $redirectionURI = $ini->variable( 'SiteSettings', 'DefaultPage' );
        return $Module->redirectTo( $redirectionURI );
    }
}

$tpl->setVariable('error',$error);
$tpl->setVariable('post',$_POST);
$tpl->setVariable('login',$login);

$Result = array();
$Result['content']    = $tpl->fetch( 'design:profil/login.tpl' );
$Result['ui_context'] = 'edit';
$Result['path']       = array();


//exit;