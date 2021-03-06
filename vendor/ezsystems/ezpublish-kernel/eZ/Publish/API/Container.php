<?php
/**
 * File containing the eZ\Publish\API\Container class.
 *
 * @copyright Copyright (C) eZ Systems AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 * @version 2014.11.1
 */

namespace eZ\Publish\API;

/**
 * Container interface
 *
 * Starting point for getting all Public API's
 *
 * @package eZ\Publish\API
 */
interface Container
{
    /**
     * Get Repository object
     *
     * Public API for
     *
     * @return \eZ\Publish\API\Repository\Repository
     */
    public function getRepository();
}
