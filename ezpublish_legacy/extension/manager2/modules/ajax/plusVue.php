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
$error = null;
$create = false;

if( empty(intval($Params['classViewed'])) || empty(intval($Params['originUserId'])) || empty(intval($Params['viewedObjectId']))) {
    echo 'false';
    eZExecution::cleanExit();
}

$class_id       = $Params['classViewed'];
$originUserId   = $Params['originUserId'];
$viewedObjectId = $Params['viewedObjectId'];
$ip = Manager::get_client_ip();

$db = eZDB::instance();
$time = time();
$insert = "INSERT INTO vue ( viewed_class_object_id, viewed_object_id, origin_user_id, date_insert, ip) VALUES ( $class_id, $viewedObjectId, $originUserId, $time, '$ip');";
$db->query($insert);

echo 'true';
eZExecution::cleanExit();