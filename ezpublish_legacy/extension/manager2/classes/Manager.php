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
}