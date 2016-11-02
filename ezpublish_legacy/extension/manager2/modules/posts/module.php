<?php

$Module = array( 'name'            => 'posts',
                 'variable_params' => true );

$ViewList = array();

$ViewList['tous'] = array(
    'functions'         => array( 'read' ),
    'script'            => 'tous.php',
    'params'            => array('parent_node_id'),
    'unordered_params'  => array(
        'offset' => 'Offset',
        'limit' => 'Limit',
    )
);


$FunctionList = array();
$FunctionList['tous'] = array();


?>
