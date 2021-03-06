<?php
/**
 * File containing the PagePartsConverterTest class.
 *
 * @copyright Copyright (C) eZ Systems AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 * @version 2014.11.1
 */

namespace eZ\Publish\Core\MVC\Legacy\Templating\Tests\Converter;

use eZ\Publish\Core\MVC\Legacy\Templating\Converter\PagePartsConverter;
use eZ\Publish\API\Repository\Values\ValueObject;
use PHPUnit_Framework_TestCase;

class PagePartsConverterTest extends PHPUnit_Framework_TestCase
{
    /**
     * @dataProvider convertProvider
     * @covers eZ\Publish\Core\MVC\Legacy\Templating\Converter\PagePartsConverter::convert
     *
     * @param \eZ\Publish\API\Repository\Values\ValueObject $valueObject
     * @param $expectedAdapterClass
     */
    public function testConvert( ValueObject $valueObject, $expectedAdapterClass )
    {
        $converter = new PagePartsConverter;
        $this->assertInstanceOf( $expectedAdapterClass, $converter->convert( $valueObject ) );
    }

    public function convertProvider()
    {
        return array(
            array(
                $this
                    ->getMockBuilder( 'eZ\\Publish\\Core\\FieldType\\Page\\Parts\\Block' )
                    ->disableOriginalConstructor()
                    ->getMock(),
                'eZ\\Publish\\Core\\MVC\\Legacy\\Templating\\Adapter\\BlockAdapter'
            ),
            array(
                $this
                    ->getMockBuilder( 'eZ\\Publish\\Core\\FieldType\\Page\\Parts\\Zone' )
                    ->disableOriginalConstructor()
                    ->getMock(),
                'eZ\\Publish\\Core\\MVC\\Legacy\\Templating\\Adapter\\ZoneAdapter'
            )
        );
    }

    /**
     * @expectedException InvalidArgumentException
     * @dataProvider convertFailNotObjectProvider
     * @covers eZ\Publish\Core\MVC\Legacy\Templating\Converter\PagePartsConverter::convert
     */
    public function testConvertFailNotObject( $value )
    {
        $converter = new PagePartsConverter;
        $converter->convert( $value );
    }

    public function convertFailNotObjectProvider()
    {
        return array(
            array( 'foo' ),
            array( 'bar' ),
            array( 123 ),
            array( true ),
            array( array() ),
        );
    }

    /**
     * @covers eZ\Publish\Core\MVC\Legacy\Templating\Converter\PagePartsConverter::convert
     * @expectedException InvalidArgumentException
     */
    public function testConvertFailWrongType()
    {
        $converter = new PagePartsConverter;
        $converter->convert( $this->getMock( 'eZ\\Publish\\API\\Repository\\Values\\ValueObject' ) );
    }
}
