<?php
/**
 * File containing the ScaleHeightDownOnlyFilterLoader class.
 *
 * @copyright Copyright (C) eZ Systems AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 * @version 2014.11.1
 */

namespace eZ\Bundle\EzPublishCoreBundle\Imagine\Filter\Loader;

use Imagine\Image\ImageInterface;
use Imagine\Exception\InvalidArgumentException;

/**
 * Filter loader for geometry/scaleheightdownonly filter.
 * Proxy to ThumbnailFilterLoader
 */
class ScaleHeightDownOnlyFilterLoader extends FilterLoaderWrapped
{
    public function load( ImageInterface $image, array $options = array() )
    {
        if ( empty( $options ) )
        {
            throw new InvalidArgumentException( 'Missing height option' );
        }

        return $this->innerLoader->load(
            $image,
            array(
                'size' => array( null, $options[0] ),
                'mode' => ImageInterface::THUMBNAIL_INSET
            )
        );
    }
}
