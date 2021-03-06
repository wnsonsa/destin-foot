<?php
/**
 * File containing the TypeTest class.
 *
 * @copyright Copyright (C) eZ Systems AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 * @version 2014.11.1
 */

namespace eZ\Publish\Core\MVC\Symfony\Matcher\Tests\Block;

use eZ\Publish\Core\MVC\Symfony\Matcher\Block\Type as BlockTypeMatcher;
use eZ\Publish\Core\FieldType\Page\Parts\Block;
use PHPUnit_Framework_TestCase;

class TypeTest extends PHPUnit_Framework_TestCase
{
    /**
     * @var \eZ\Publish\Core\MVC\Symfony\Matcher\Block\MatcherInterface
     */
    private $matcher;

    protected function setUp()
    {
        parent::setUp();
        $this->matcher = new BlockTypeMatcher;
    }

    /**
     * @dataProvider matchBlockProvider
     *
     * @param $matchingConfig
     * @param \eZ\Publish\Core\FieldType\Page\Parts\Block $block
     * @param $expectedResult
     */
    public function testMatchBlock( $matchingConfig, Block $block, $expectedResult )
    {
        $this->matcher->setMatchingConfig( $matchingConfig );
        $this->assertSame( $expectedResult, $this->matcher->matchBlock( $block ) );
    }

    public function matchBlockProvider()
    {
        $data = array();

        $data[] = array(
            'foo',
            $this->generateBlockForType( 'foo' ),
            true
        );

        $data[] = array(
            'foo',
            $this->generateBlockForType( 'bar' ),
            false
        );

        $data[] = array(
            array( 'foo', 'baz' ),
            $this->generateBlockForType( 'bar' ),
            false
        );

        $data[] = array(
            array( 'foo', 'baz' ),
            $this->generateBlockForType( 'baz' ),
            true
        );

        return $data;
    }

    /**
     * @param $type
     * @return \eZ\Publish\Core\FieldType\Page\Parts\Block
     */
    private function generateBlockForType( $type )
    {
        return new Block(
            array( 'type' => $type )
        );
    }
}
