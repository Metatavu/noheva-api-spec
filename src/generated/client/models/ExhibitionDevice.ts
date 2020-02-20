/* tslint:disable */
/* eslint-disable */
/**
 * Muisti API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ExhibitionDevice
 */
export interface ExhibitionDevice {
    /**
     * 
     * @type {string}
     * @memberof ExhibitionDevice
     */
    readonly id?: string;
    /**
     * 
     * @type {string}
     * @memberof ExhibitionDevice
     */
    readonly exhibition_id?: string;
    /**
     * Device group id
     * @type {string}
     * @memberof ExhibitionDevice
     */
    group_id: string;
    /**
     * 
     * @type {string}
     * @memberof ExhibitionDevice
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ExhibitionDevice
     */
    readonly creator_id?: string;
    /**
     * 
     * @type {string}
     * @memberof ExhibitionDevice
     */
    readonly last_modifier_id?: string;
    /**
     * Created date
     * @type {Date}
     * @memberof ExhibitionDevice
     */
    readonly created_at?: Date;
    /**
     * Date modified
     * @type {Date}
     * @memberof ExhibitionDevice
     */
    readonly modified_at?: Date;
}

export function ExhibitionDeviceFromJSON(json: any): ExhibitionDevice {
    return ExhibitionDeviceFromJSONTyped(json, false);
}

export function ExhibitionDeviceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExhibitionDevice {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'exhibition_id': !exists(json, 'exhibitionId') ? undefined : json['exhibitionId'],
        'group_id': json['groupId'],
        'name': json['name'],
        'creator_id': !exists(json, 'creatorId') ? undefined : json['creatorId'],
        'last_modifier_id': !exists(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'created_at': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'modified_at': !exists(json, 'modifiedAt') ? undefined : (new Date(json['modifiedAt'])),
    };
}

export function ExhibitionDeviceToJSON(value?: ExhibitionDevice | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'groupId': value.group_id,
        'name': value.name,
    };
}


