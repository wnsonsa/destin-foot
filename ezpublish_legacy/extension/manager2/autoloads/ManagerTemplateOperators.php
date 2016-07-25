<?php

/**
 * Created by PhpStorm.
 * User: wnsonsa
 * Date: 19/07/16
 * Time: 19:57
 */
class ManagerTemplateOperators
{
    function ManagerTemplateOperators() {
    }

    function operatorList() {

        return array( 'add_vue' );
    }

    function namedParameterPerOperator() {

        return true;
    }

    function namedParameterList() {

        return array(
            'add_vue' => array(
                'object_id' =>
                    array(
                        'type' => 'string',
                        'required' => true
                    )
            )
        );
    }

    function modify( $tpl, $operatorName, $operatorParameters, &$rootNamespace, &$currentNamespace, &$operatorValue, &$namedParameters ) {

        switch ( $operatorName )
        {
            case 'add_vue':
            {
                $object_id           = $namedParameters['object_id'];
                $operatorValue = Manager::addVue( $object_id );
            }
                break;
        }
    }
}