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

if ( isset( $Params['parent_node_id'] ) )
{
    $parentNodeId = (int) $Params['parent_node_id'];
}
$offset = 0;
if ( isset( $Params['Offset'] ) )
{
    $offset = (int) $Params['Offset'];
}
$limit = 20;
if ( isset( $Params['Limit'] ) )
{
    $limit = (int) $Params['Limit'];
}


$articles = eZContentObjectTreeNode::subTreeByNodeID(
    array(
        'ClassFilterType' => 'include',
        'ClassFilterArray' => array(
            'image',
            'video',
            'blog_post',
        ),
        'Depth'     => 10,
        'Offset'    => $offset,
        'Limit'     => $limit,
        'SortBy'    => array(array('priority', false), array('name', true))
    ),
    $parentNodeId
);

$tpl->setVariable('articles',$articles);

$Result = array();
$Result['content']    = $tpl->fetch( 'design:posts/tous.tpl' );
$Result['ui_context'] = 'edit';
$Result['path']       = array();

//eZExecution::cleanExit();