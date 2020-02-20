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


import * as runtime from '../runtime';
import {
    ExhibitionRoom,
    ExhibitionRoomFromJSON,
    ExhibitionRoomToJSON,
} from '../models';

export interface CreateExhibitionRoomRequest {
    exhibition_room: ExhibitionRoom;
    exhibition_id: string;
}

export interface DeleteExhibitionRoomRequest {
    exhibition_id: string;
    room_id: string;
}

export interface FindExhibitionRoomRequest {
    exhibition_id: string;
    room_id: string;
}

export interface ListExhibitionRoomsRequest {
    exhibition_id: string;
}

export interface UpdateExhibitionRoomRequest {
    exhibition_room: ExhibitionRoom;
    exhibition_id: string;
    room_id: string;
}

/**
 * no description
 */
export class ExhibitionRoomsApi extends runtime.BaseAPI {

    /**
     * Creates new exhibition room
     * Create a room
     */
    async createExhibitionRoomRaw(requestParameters: CreateExhibitionRoomRequest): Promise<runtime.ApiResponse<ExhibitionRoom>> {
        if (requestParameters.exhibition_room === null || requestParameters.exhibition_room === undefined) {
            throw new runtime.RequiredError('exhibition_room','Required parameter requestParameters.exhibition_room was null or undefined when calling createExhibitionRoom.');
        }

        if (requestParameters.exhibition_id === null || requestParameters.exhibition_id === undefined) {
            throw new runtime.RequiredError('exhibition_id','Required parameter requestParameters.exhibition_id was null or undefined when calling createExhibitionRoom.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/exhibitions/{exhibitionId}/rooms`.replace(`{${"exhibitionId"}}`, encodeURIComponent(String(requestParameters.exhibition_id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ExhibitionRoomToJSON(requestParameters.exhibition_room),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ExhibitionRoomFromJSON(jsonValue));
    }

    /**
     * Creates new exhibition room
     * Create a room
     */
    async createExhibitionRoom(requestParameters: CreateExhibitionRoomRequest): Promise<ExhibitionRoom> {
        const response = await this.createExhibitionRoomRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delets exhibition room.
     * Deletes room.
     */
    async deleteExhibitionRoomRaw(requestParameters: DeleteExhibitionRoomRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.exhibition_id === null || requestParameters.exhibition_id === undefined) {
            throw new runtime.RequiredError('exhibition_id','Required parameter requestParameters.exhibition_id was null or undefined when calling deleteExhibitionRoom.');
        }

        if (requestParameters.room_id === null || requestParameters.room_id === undefined) {
            throw new runtime.RequiredError('room_id','Required parameter requestParameters.room_id was null or undefined when calling deleteExhibitionRoom.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/exhibitions/{exhibitionId}/rooms/{roomId}`.replace(`{${"exhibitionId"}}`, encodeURIComponent(String(requestParameters.exhibition_id))).replace(`{${"roomId"}}`, encodeURIComponent(String(requestParameters.room_id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delets exhibition room.
     * Deletes room.
     */
    async deleteExhibitionRoom(requestParameters: DeleteExhibitionRoomRequest): Promise<void> {
        await this.deleteExhibitionRoomRaw(requestParameters);
    }

    /**
     * Finds a room by id
     * Find a room
     */
    async findExhibitionRoomRaw(requestParameters: FindExhibitionRoomRequest): Promise<runtime.ApiResponse<ExhibitionRoom>> {
        if (requestParameters.exhibition_id === null || requestParameters.exhibition_id === undefined) {
            throw new runtime.RequiredError('exhibition_id','Required parameter requestParameters.exhibition_id was null or undefined when calling findExhibitionRoom.');
        }

        if (requestParameters.room_id === null || requestParameters.room_id === undefined) {
            throw new runtime.RequiredError('room_id','Required parameter requestParameters.room_id was null or undefined when calling findExhibitionRoom.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/exhibitions/{exhibitionId}/rooms/{roomId}`.replace(`{${"exhibitionId"}}`, encodeURIComponent(String(requestParameters.exhibition_id))).replace(`{${"roomId"}}`, encodeURIComponent(String(requestParameters.room_id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ExhibitionRoomFromJSON(jsonValue));
    }

    /**
     * Finds a room by id
     * Find a room
     */
    async findExhibitionRoom(requestParameters: FindExhibitionRoomRequest): Promise<ExhibitionRoom> {
        const response = await this.findExhibitionRoomRaw(requestParameters);
        return await response.value();
    }

    /**
     * List exhibition rooms
     * List rooms
     */
    async listExhibitionRoomsRaw(requestParameters: ListExhibitionRoomsRequest): Promise<runtime.ApiResponse<Array<ExhibitionRoom>>> {
        if (requestParameters.exhibition_id === null || requestParameters.exhibition_id === undefined) {
            throw new runtime.RequiredError('exhibition_id','Required parameter requestParameters.exhibition_id was null or undefined when calling listExhibitionRooms.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/exhibitions/{exhibitionId}/rooms`.replace(`{${"exhibitionId"}}`, encodeURIComponent(String(requestParameters.exhibition_id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ExhibitionRoomFromJSON));
    }

    /**
     * List exhibition rooms
     * List rooms
     */
    async listExhibitionRooms(requestParameters: ListExhibitionRoomsRequest): Promise<Array<ExhibitionRoom>> {
        const response = await this.listExhibitionRoomsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates room.
     * Updates room.
     */
    async updateExhibitionRoomRaw(requestParameters: UpdateExhibitionRoomRequest): Promise<runtime.ApiResponse<ExhibitionRoom>> {
        if (requestParameters.exhibition_room === null || requestParameters.exhibition_room === undefined) {
            throw new runtime.RequiredError('exhibition_room','Required parameter requestParameters.exhibition_room was null or undefined when calling updateExhibitionRoom.');
        }

        if (requestParameters.exhibition_id === null || requestParameters.exhibition_id === undefined) {
            throw new runtime.RequiredError('exhibition_id','Required parameter requestParameters.exhibition_id was null or undefined when calling updateExhibitionRoom.');
        }

        if (requestParameters.room_id === null || requestParameters.room_id === undefined) {
            throw new runtime.RequiredError('room_id','Required parameter requestParameters.room_id was null or undefined when calling updateExhibitionRoom.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/exhibitions/{exhibitionId}/rooms/{roomId}`.replace(`{${"exhibitionId"}}`, encodeURIComponent(String(requestParameters.exhibition_id))).replace(`{${"roomId"}}`, encodeURIComponent(String(requestParameters.room_id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ExhibitionRoomToJSON(requestParameters.exhibition_room),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ExhibitionRoomFromJSON(jsonValue));
    }

    /**
     * Updates room.
     * Updates room.
     */
    async updateExhibitionRoom(requestParameters: UpdateExhibitionRoomRequest): Promise<ExhibitionRoom> {
        const response = await this.updateExhibitionRoomRaw(requestParameters);
        return await response.value();
    }

}
