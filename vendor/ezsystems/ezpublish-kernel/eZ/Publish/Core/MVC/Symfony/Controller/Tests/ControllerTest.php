<?php
/**
 * File containing the ControllerTest class.
 *
 * @copyright Copyright (C) eZ Systems AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 * @version 2014.11.1
 */

namespace eZ\Publish\Core\MVC\Symfony\Controller\Tests;

use Symfony\Component\HttpFoundation\Response;
use PHPUnit_Framework_TestCase;

/**
 * @mvc
 */
class ControllerTest extends PHPUnit_Framework_TestCase
{
    /**
     * @var \eZ\Publish\Core\MVC\Symfony\Controller\Controller
     */
    protected $controller;

    /**
     * @var \PHPUnit_Framework_MockObject_MockObject
     */
    protected $templateEngineMock;

    /**
     * @var \PHPUnit_Framework_MockObject_MockObject
     */
    protected $containerMock;

    protected function setUp()
    {
        $this->templateEngineMock = $this->getMock( 'Symfony\\Component\\Templating\\EngineInterface' );
        $this->containerMock = $this->getMock( 'Symfony\\Component\\DependencyInjection\\ContainerInterface' );
        $this->controller = $this->getMockForAbstractClass( 'eZ\\Publish\\Core\\MVC\\Symfony\\Controller\\Controller' );
        $this->controller->setContainer( $this->containerMock );
        $this->containerMock
            ->expects( $this->any() )
            ->method( 'get' )
            ->with( 'templating' )
            ->will( $this->returnValue( $this->templateEngineMock ) );
    }
    /**
     * @covers \eZ\Publish\Core\MVC\Symfony\Controller\Controller::render
     */
    public function testRender()
    {
        $view = 'some:valid:view.html.twig';
        $params = array( 'foo' => 'bar', 'truc' => 'muche' );
        $tplResult = "I'm a template result";
        $this->templateEngineMock
            ->expects( $this->once() )
            ->method( 'render' )
            ->with( $view, $params )
            ->will( $this->returnValue( $tplResult ) );
        $response = $this->controller->render( $view, $params );
        self::assertInstanceOf( 'Symfony\\Component\\HttpFoundation\\Response', $response );
        self::assertSame( $tplResult, $response->getContent() );
    }

    public function testRenderWithResponse()
    {
        $response = new Response();
        $view = 'some:valid:view.html.twig';
        $params = array( 'foo' => 'bar', 'truc' => 'muche' );
        $tplResult = "I'm a template result";
        $this->templateEngineMock
            ->expects( $this->once() )
            ->method( 'render' )
            ->with( $view, $params )
            ->will( $this->returnValue( $tplResult ) );

        self::assertSame( $response, $this->controller->render( $view, $params, $response ) );
        self::assertSame( $tplResult, $response->getContent() );
    }
}
