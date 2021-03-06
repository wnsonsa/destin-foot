<?php
/**
 * File containing the AsseticPass class.
 *
 * @copyright Copyright (C) eZ Systems AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 * @version 2014.11.1
 */

namespace eZ\Bundle\EzPublishCoreBundle\DependencyInjection\Compiler;

use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Reference;

/**
 * Tweaks Assetic services.
 */
class AsseticPass implements CompilerPassInterface
{
    public function process( ContainerBuilder $container )
    {
        if ( !$container->hasDefinition( 'assetic.asset_factory' ) )
        {
            return;
        }

        $assetFactoryDef = $container->findDefinition( 'assetic.asset_factory' );
        $assetFactoryDef
            ->addMethodCall( 'setConfigResolver', array( new Reference( 'ezpublish.config.resolver' ) ) )
            ->addMethodCall(
                'setDynamicSettingParser',
                array( new Reference( 'ezpublish.config.dynamic_setting.parser' ) )
            );
    }
}
