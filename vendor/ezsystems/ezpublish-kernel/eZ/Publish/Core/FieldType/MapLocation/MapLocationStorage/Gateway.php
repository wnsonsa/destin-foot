<?php
/**
 * File containing the MapLocationStorage Gateway
 *
 * @copyright Copyright (C) eZ Systems AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 * @version 2014.11.1
 */

namespace eZ\Publish\Core\FieldType\MapLocation\MapLocationStorage;

use eZ\Publish\SPI\Persistence\Content\Field;
use eZ\Publish\SPI\Persistence\Content\VersionInfo;
use eZ\Publish\Core\FieldType\StorageGateway;

abstract class Gateway extends StorageGateway
{
    /**
     * Stores the data stored in the given $field
     *
     * Potentially rewrites data in $field and returns true, if the $field
     * needs to be updated in the database.
     *
     * @param VersionInfo $versionInfo
     * @param Field $field
     *
     * @return boolean If restoring of the internal field data is required
     */
    abstract public function storeFieldData( VersionInfo $versionInfo, Field $field );

    /**
     * Sets the loaded field data into $field->externalData.
     *
     * @param VersionInfo $versionInfo
     * @param Field $field
     *
     * @return array
     */
    abstract public function getFieldData( VersionInfo $versionInfo, Field $field );

    /**
     * Deletes the data for all given $fieldIds
     *
     * @param VersionInfo $versionInfo
     * @param array $fieldIds
     *
     * @return void
     */
    abstract public function deleteFieldData( VersionInfo $versionInfo, array $fieldIds );
}

