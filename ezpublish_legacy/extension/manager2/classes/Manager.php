<?php

/**
 * Created by PhpStorm.
 * User: wnsonsa
 * Date: 18/07/16
 * Time: 22:50
 */
class Manager
{

    public static function addVue($object_id) {
        $object_id = 139;
        if(!empty($object_id)) {
            $postObject = eZContentObject::fetch($object_id);
            eZLog::write('test');
            if ( $postObject instanceof eZContentObject) {
                $db = eZDB::instance();
                $data_map = $postObject->attribute('data_map');
                $eztags = $data_map['eztags']->attribute('content')->tags();
                eZLog::write('test2');
                foreach ($eztags as $tag) {
                    $keywords[] = $tag->attribute('keyword');
                }
                $tags = implode(',',$keywords);
                eZLog::write($tags);
                $currentUser = eZUser::currentUser();
                $groups = implode(',',$currentUser->attribute('groups'));
                eZLog::write($groups);
                $insert = "INSERT INTO vue ( object_id, tag, group_ids) VALUES ( $object_id, '$tags', '$groups');";
                $db->query($insert);
                return;
            }
        }
        return ['result' => false];
    }

    static public function get_client_ip() {
        $ipaddress = '';
        if (isset($_SERVER['HTTP_CLIENT_IP']))
            $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
        else if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
            $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
        else if(isset($_SERVER['HTTP_X_FORWARDED']))
            $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
        else if(isset($_SERVER['HTTP_FORWARDED_FOR']))
            $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
        else if(isset($_SERVER['HTTP_FORWARDED']))
            $ipaddress = $_SERVER['HTTP_FORWARDED'];
        else if(isset($_SERVER['REMOTE_ADDR']))
            $ipaddress = $_SERVER['REMOTE_ADDR'];
        else
            $ipaddress = 'UNKNOWN';
        return $ipaddress;
    }
}