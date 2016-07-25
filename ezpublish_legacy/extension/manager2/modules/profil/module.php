<?php

$Module = array( 'name'            => 'profil',
                 'variable_params' => true );

$ViewList = array();

$ViewList['creer'] = array(
    'functions'               => array( 'read' ),
    'script'                  => 'creer.php',
    'params'                  => array() );

$ViewList['login'] = array(
    'functions'               => array( 'read' ),
    'script'                  => 'login.php',
    'params'                  => array() );

$ViewList['modifier'] = array(
    'functions'               => array( 'read' ),
    'script'                  => 'modifier.php',
    'params'                  => array() );

$FunctionList = array();
$FunctionList['creer'] = array();
$FunctionList['login'] = array();
$FunctionList['modifier'] = array();

?>
