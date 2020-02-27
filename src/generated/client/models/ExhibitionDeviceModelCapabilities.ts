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
 * Describes device model capabilities
 * @export
 * @interface ExhibitionDeviceModelCapabilities
 */
export interface ExhibitionDeviceModelCapabilities {
    /**
     * Whether device supports touching
     * @type {boolean}
     * @memberof ExhibitionDeviceModelCapabilities
     */
    touch: boolean;
}

export function ExhibitionDeviceModelCapabilitiesFromJSON(json: any): ExhibitionDeviceModelCapabilities {
    return ExhibitionDeviceModelCapabilitiesFromJSONTyped(json, false);
}

export function ExhibitionDeviceModelCapabilitiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExhibitionDeviceModelCapabilities {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'touch': json['touch'],
    };
}

export function ExhibitionDeviceModelCapabilitiesToJSON(value?: ExhibitionDeviceModelCapabilities | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'touch': value.touch,
    };
}


