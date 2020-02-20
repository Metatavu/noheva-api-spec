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
import {
    VisitorSessionState,
    VisitorSessionStateFromJSON,
    VisitorSessionStateFromJSONTyped,
    VisitorSessionStateToJSON,
    VisitorSessionUser,
    VisitorSessionUserFromJSON,
    VisitorSessionUserFromJSONTyped,
    VisitorSessionUserToJSON,
    VisitorSessionVariable,
    VisitorSessionVariableFromJSON,
    VisitorSessionVariableFromJSONTyped,
    VisitorSessionVariableToJSON,
} from './';

/**
 * 
 * @export
 * @interface VisitorSession
 */
export interface VisitorSession {
    /**
     * Unique id for the session
     * @type {string}
     * @memberof VisitorSession
     */
    readonly id?: string;
    /**
     * Exhibition id the visiotr was attending to
     * @type {string}
     * @memberof VisitorSession
     */
    readonly exhibition_id?: string;
    /**
     * 
     * @type {VisitorSessionState}
     * @memberof VisitorSession
     */
    state?: VisitorSessionState;
    /**
     * 
     * @type {Array<VisitorSessionVariable>}
     * @memberof VisitorSession
     */
    variables?: Array<VisitorSessionVariable>;
    /**
     * 
     * @type {Array<VisitorSessionUser>}
     * @memberof VisitorSession
     */
    users: Array<VisitorSessionUser>;
    /**
     * 
     * @type {string}
     * @memberof VisitorSession
     */
    readonly creator_id?: string;
    /**
     * 
     * @type {string}
     * @memberof VisitorSession
     */
    readonly last_modifier_id?: string;
    /**
     * Created date
     * @type {Date}
     * @memberof VisitorSession
     */
    readonly created_at?: Date;
    /**
     * Date modified
     * @type {Date}
     * @memberof VisitorSession
     */
    readonly modified_at?: Date;
}

export function VisitorSessionFromJSON(json: any): VisitorSession {
    return VisitorSessionFromJSONTyped(json, false);
}

export function VisitorSessionFromJSONTyped(json: any, ignoreDiscriminator: boolean): VisitorSession {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'exhibition_id': !exists(json, 'exhibitionId') ? undefined : json['exhibitionId'],
        'state': !exists(json, 'state') ? undefined : VisitorSessionStateFromJSON(json['state']),
        'variables': !exists(json, 'variables') ? undefined : ((json['variables'] as Array<any>).map(VisitorSessionVariableFromJSON)),
        'users': ((json['users'] as Array<any>).map(VisitorSessionUserFromJSON)),
        'creator_id': !exists(json, 'creatorId') ? undefined : json['creatorId'],
        'last_modifier_id': !exists(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'created_at': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'modified_at': !exists(json, 'modifiedAt') ? undefined : (new Date(json['modifiedAt'])),
    };
}

export function VisitorSessionToJSON(value?: VisitorSession | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'state': VisitorSessionStateToJSON(value.state),
        'variables': value.variables === undefined ? undefined : ((value.variables as Array<any>).map(VisitorSessionVariableToJSON)),
        'users': ((value.users as Array<any>).map(VisitorSessionUserToJSON)),
    };
}


