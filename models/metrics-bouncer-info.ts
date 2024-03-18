/*
Swagger CrowdSec

CrowdSec local API

The version of the OpenAPI document: 1.0.0
Contact: contact@crowdsec.net

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Software version info (so we can warn users about out-of-date software). The software name and the version are \"guessed\" from the user-agent
 * @export
 * @interface MetricsBouncerInfo
 */
export interface MetricsBouncerInfo {
    /**
     * software version
     * @type {string}
     * @memberof MetricsBouncerInfo
     */
    'version'?: string;
    /**
     * name of the component
     * @type {string}
     * @memberof MetricsBouncerInfo
     */
    'custom_name'?: string;
    /**
     * bouncer type (firewall, php ...)
     * @type {string}
     * @memberof MetricsBouncerInfo
     */
    'name'?: string;
    /**
     * last bouncer pull date
     * @type {string}
     * @memberof MetricsBouncerInfo
     */
    'last_pull'?: string;
}

