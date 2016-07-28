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

if( empty(intval($Params['classViewed'])) || empty(intval($Params['originUserId '])) || empty(intval($Params['viewedObjectId']))) {
    return false;
}

$class_id       = $Params['classViewed'];
$originUserId   = $Params['originUserId'];
$viewedObjectId = $Params['viewedObjectId'];
$ip = Manager2::get_client_ip();

$db = eZDB::instance();
$insert = "INSERT INTO vue (id, viewed_class_object_id, viewed_object_id, origin_user_id, date_insert, ip) VALUES (NULL, $class_id, $viewedObjectId, $originUserId, CURRENT_TIMESTAMP, $ip);";
$db->query($insert);

return true;
