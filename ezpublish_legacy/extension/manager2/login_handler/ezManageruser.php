<?php

/**
 * Created by PhpStorm.
 * User: wnsonsa
 * Date: 12/06/16
 * Time: 17:46
 */
class ezManageruser extends eZUser
{
    public static function loginUser( $login, $password, $authenticationMatch = false )
    {
        $userID = 14;

        $currentUser = eZUser::fetch( $userID );
        eZUser::updateLastVisit( $userID );
        eZUser::setCurrentlyLoggedInUser( $currentUser, $userID );

        return $currentUser;
    }
}