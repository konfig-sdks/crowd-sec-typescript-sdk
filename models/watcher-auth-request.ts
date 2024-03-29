/*
Swagger CrowdSec

CrowdSec local API

The version of the OpenAPI document: 1.0.0
Contact: contact@crowdsec.net

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface WatcherAuthRequest
 */
export interface WatcherAuthRequest {
    /**
     * 
     * @type {string}
     * @memberof WatcherAuthRequest
     */
    'machine_id': string;
    /**
     * 
     * @type {string}
     * @memberof WatcherAuthRequest
     */
    'password': string;
    /**
     * the list of scenarios enabled on the watcher
     * @type {Array<string>}
     * @memberof WatcherAuthRequest
     */
    'scenarios'?: Array<string>;
}

