<?php

$Module = array( 'name'            => 'ajax',
                 'variable_params' => true );

$ViewList = array();

$ViewList['plus-vue'] = array(
    'functions' => array( 'read' ),
    'script'    => 'plusVue.php',
    'params'    => array(
        'classViewed',
        'originUserId',
        'viewedObjectId',
    ) );


$FunctionList = array();
$FunctionList['plus-vue'] = array();

?>
