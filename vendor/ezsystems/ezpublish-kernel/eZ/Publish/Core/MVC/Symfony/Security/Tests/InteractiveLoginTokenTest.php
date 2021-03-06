<?php
/**
 * File containing the InteractiveLoginTokenTest class.
 *
 * @copyright Copyright (C) eZ Systems AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 * @version 2014.11.1
 */

namespace eZ\Publish\Core\MVC\Symfony\Security\Tests;

use eZ\Publish\Core\MVC\Symfony\Security\InteractiveLoginToken;
use PHPUnit_Framework_TestCase;
use Symfony\Component\Security\Core\Role\Role;

class InteractiveLoginTokenTest extends PHPUnit_Framework_TestCase
{
    public function testConstruct()
    {
        $user = $this->getMock( 'eZ\Publish\Core\MVC\Symfony\Security\UserInterface' );
        $originalTokenType = 'FooBar';
        $credentials = 'my_credentials';
        $providerKey = 'key';
        $roles = array( 'ROLE_USER', 'ROLE_TEST', new Role( 'ROLE_FOO' ) );
        $expectedRoles = array();
        foreach ( $roles as $role )
        {
            if ( is_string( $role ) )
            {
                $expectedRoles[] = new Role( $role );
            }
            else
            {
                $expectedRoles[] = $role;
            }
        }

        $token = new InteractiveLoginToken( $user, $originalTokenType, $credentials, $providerKey, $roles );
        $this->assertSame( $user, $token->getUser() );
        $this->assertTrue( $token->isAuthenticated() );
        $this->assertSame( $originalTokenType, $token->getOriginalTokenType() );
        $this->assertSame( $credentials, $token->getCredentials() );
        $this->assertSame( $providerKey, $token->getProviderKey() );
        $this->assertEquals( $expectedRoles, $token->getRoles() );
    }

    public function testSerialize()
    {
        $user = $this->getMock( 'eZ\Publish\Core\MVC\Symfony\Security\UserInterface' );
        $originalTokenType = 'FooBar';
        $credentials = 'my_credentials';
        $providerKey = 'key';
        $roles = array( 'ROLE_USER', 'ROLE_TEST', new Role( 'ROLE_FOO' ) );

        $token = new InteractiveLoginToken( $user, $originalTokenType, $credentials, $providerKey, $roles );
        $serialized = serialize( $token );
        $unserializedToken = unserialize( $serialized );
        $this->assertEquals( $token, $unserializedToken );
    }
}
