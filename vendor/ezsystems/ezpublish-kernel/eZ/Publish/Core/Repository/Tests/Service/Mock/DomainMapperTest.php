<?php
/**
 * File contains: eZ\Publish\Core\Repository\Tests\Service\Mock\DomainMapperTest class
 *
 * @copyright Copyright (C) eZ Systems AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 * @version 2014.11.1
 */

namespace eZ\Publish\Core\Repository\Tests\Service\Mock;

use eZ\Publish\API\Repository\Values\Content\VersionInfo as APIVersionInfo;
use eZ\Publish\Core\Repository\Tests\Service\Mock\Base as BaseServiceMockTest;
use eZ\Publish\Core\Repository\DomainMapper;
use eZ\Publish\SPI\Persistence\Content\Language as SPILanguage;
use eZ\Publish\SPI\Persistence\Content\VersionInfo as SPIVersionInfo;
use eZ\Publish\SPI\Persistence\Content\ContentInfo as SPIContentInfo;

/**
 * Mock test case for internal DomainMapper
 */
class DomainMapperTest extends BaseServiceMockTest
{
    /**
     * @covers \eZ\Publish\Core\Repository\DomainMapper::buildVersionInfoDomainObject
     * @dataProvider providerForBuildVersionInfo
     */
    public function testBuildVersionInfo( SPIVersionInfo $spiVersionInfo, array $languages, array $expected )
    {
        $i = 0;
        $languageHandlerMock = $this->getLanguageHandlerMock();
        foreach ( $languages as $languageId => $languageCode )
        {
            $languageHandlerMock->expects( $this->at( $i++ ) )
                ->method( "load" )
                ->with( $languageId )
                ->will(
                    $this->returnValue(
                        new SPILanguage(
                            array( 'id' => $languageId, 'languageCode' => $languageCode )
                        )
                    )
                );
        }

        if ( empty( $languages ) )
        {
            $languageHandlerMock->expects( $this->never() )->method( "load" );
        }

        $versionInfo = $this->getDomainMapper()->buildVersionInfoDomainObject( $spiVersionInfo );
        $this->assertInstanceOf( 'eZ\\Publish\\Core\\Repository\\Values\\Content\\VersionInfo', $versionInfo );

        foreach ( $expected as $expectedProperty => $expectedValue )
        {
            $this->assertAttributeSame(
                $expectedValue,
                $expectedProperty,
                $versionInfo
            );
        }
    }

    public function providerForBuildVersionInfo()
    {
        return array(
            array(
                new SPIVersionInfo(
                    array(
                        'status' => 44,
                        'contentInfo' => new SPIContentInfo
                    )
                ),
                array(),
                array( 'status' => APIVersionInfo::STATUS_DRAFT )
            ),
            array(
                new SPIVersionInfo(
                    array(
                        'status' => SPIVersionInfo::STATUS_DRAFT,
                        'contentInfo' => new SPIContentInfo
                    )
                ),
                array(),
                array( 'status' => APIVersionInfo::STATUS_DRAFT )
            ),
            array(
                new SPIVersionInfo(
                    array(
                        'status' => SPIVersionInfo::STATUS_PENDING,
                        'contentInfo' => new SPIContentInfo
                    )
                ),
                array(),
                array( 'status' => APIVersionInfo::STATUS_DRAFT )
            ),
            array(
                new SPIVersionInfo(
                    array(
                        'status' => SPIVersionInfo::STATUS_ARCHIVED,
                        'contentInfo' => new SPIContentInfo,
                        'languageIds' => array( 1, 3, 5 )
                    )
                ),
                array( 1 => 'eng-GB', 3 => 'nor-NB', 5 => 'fre-FR' ),
                array(
                    'status' => APIVersionInfo::STATUS_ARCHIVED,
                    'languageCodes' => array( 'eng-GB', 'nor-NB', 'fre-FR' )
                )
            ),
            array(
                new SPIVersionInfo(
                    array(
                        'status' => SPIVersionInfo::STATUS_PUBLISHED,
                        'contentInfo' => new SPIContentInfo
                    )
                ),
                array(),
                array( 'status' => APIVersionInfo::STATUS_PUBLISHED )
            ),
        );
    }

    /**
     * Returns DomainMapper
     *
     * @return \eZ\Publish\Core\Repository\DomainMapper
     */
    protected function getDomainMapper()
    {
        return new DomainMapper(
            $this->getRepositoryMock(),
            $this->getTypeHandlerMock(),
            $this->getLanguageHandlerMock()
        );
    }

    /**
     * @return \eZ\Publish\SPI\Persistence\Content\Language\Handler|\PHPUnit_Framework_MockObject_MockObject
     */
    protected function getLanguageHandlerMock()
    {
        return $this->getPersistenceMockHandler( 'Content\\Language\\Handler' );
    }

    /**
     * @return \eZ\Publish\SPI\Persistence\Content\Type\Handler|\PHPUnit_Framework_MockObject_MockObject
     */
    protected function getTypeHandlerMock()
    {
        return $this->getPersistenceMockHandler( 'Content\\Type\\Handler' );
    }
}
