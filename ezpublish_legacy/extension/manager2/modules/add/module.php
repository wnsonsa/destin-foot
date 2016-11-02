<?php

$Module = array( 'name'            => 'add',
                 'variable_params' => true );

$ViewList = array();

$ViewList['photo'] = array(
    'functions' => array( 'read' ),
    'script'    => 'photo.php',
    'params'    => array() );


$FunctionList = array();
$FunctionList['photo'] = array();

?>
