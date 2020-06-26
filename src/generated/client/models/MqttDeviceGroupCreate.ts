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
 * MQTT notification message about device group creation. This is actually not part of REST API spec but a realtime notification via MQTT channel
 * @export
 * @interface MqttDeviceGroupCreate
 */
export interface MqttDeviceGroupCreate {
    /**
     * 
     * @type {string}
     * @memberof MqttDeviceGroupCreate
     */
    readonly id: string;
    /**
     * Id of exhibition this device group belongs to
     * @type {string}
     * @memberof MqttDeviceGroupCreate
     */
    readonly exhibitionId: string;
}

export function MqttDeviceGroupCreateFromJSON(json: any): MqttDeviceGroupCreate {
    return MqttDeviceGroupCreateFromJSONTyped(json, false);
}

export function MqttDeviceGroupCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): MqttDeviceGroupCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'exhibitionId': json['exhibitionId'],
    };
}

export function MqttDeviceGroupCreateToJSON(value?: MqttDeviceGroupCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}


