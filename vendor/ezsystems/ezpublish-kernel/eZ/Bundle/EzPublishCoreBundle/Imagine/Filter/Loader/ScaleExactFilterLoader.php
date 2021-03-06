<?php
/**
 * File containing the ScaleExactFilterLoader class.
 *
 * @copyright Copyright (C) eZ Systems AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 * @version 2014.11.1
 */

namespace eZ\Bundle\EzPublishCoreBundle\Imagine\Filter\Loader;

use Imagine\Image\ImageInterface;
use Imagine\Exception\InvalidArgumentException;

/**
 * Filter loader for geometry/scaleexact filter.
 * Proxy to ThumbnailFilterLoader
 */
class ScaleExactFilterLoader extends FilterLoaderWrapped
{
    public function load( ImageInterface $image, array $options = array() )
    {
        if ( count( $options ) < 2 )
        {
            throw new InvalidArgumentException( 'Missing width and/or height options' );
        }

        return $this->innerLoader->load( $image, array( 'size' => $options ) );
    }
}
