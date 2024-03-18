<div align="center">

[![Visit Crowdsec](./header.png)](https://www.crowdsec.net&#x2F;)

# [Crowdsec](https://www.crowdsec.net&#x2F;)<a id="crowdsec"></a>

CrowdSec local API

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`crowdsec.bouncers.getDecisionsStream`](#crowdsecbouncersgetdecisionsstream)
  * [`crowdsec.bouncers.getDecisionsStream_0`](#crowdsecbouncersgetdecisionsstream_0)
  * [`crowdsec.bouncers.getInformation`](#crowdsecbouncersgetinformation)
  * [`crowdsec.bouncers.getInformation_0`](#crowdsecbouncersgetinformation_0)
  * [`crowdsec.watchers.authenticateSession`](#crowdsecwatchersauthenticatesession)
  * [`crowdsec.watchers.createAlerts`](#crowdsecwatcherscreatealerts)
  * [`crowdsec.watchers.deleteAlertById`](#crowdsecwatchersdeletealertbyid)
  * [`crowdsec.watchers.getAlertById`](#crowdsecwatchersgetalertbyid)
  * [`crowdsec.watchers.getAlertById_0`](#crowdsecwatchersgetalertbyid_0)
  * [`crowdsec.watchers.listAlerts`](#crowdsecwatcherslistalerts)
  * [`crowdsec.watchers.registerWatcher`](#crowdsecwatchersregisterwatcher)
  * [`crowdsec.watchers.removeAlerts`](#crowdsecwatchersremovealerts)
  * [`crowdsec.watchers.removeDecisionById`](#crowdsecwatchersremovedecisionbyid)
  * [`crowdsec.watchers.removeDecisions`](#crowdsecwatchersremovedecisions)
  * [`crowdsec.watchers.searchAlerts`](#crowdsecwatcherssearchalerts)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=CrowdSec&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { CrowdSec } from "crowd-sec-typescript-sdk";

const crowdsec = new CrowdSec({
  // Defining the base path is optional and defaults to https://127.0.0.1/v1
  // basePath: "https://127.0.0.1/v1",
  aPIKeyAuthorizer: "API_KEY",
  jWTAuthorizer: "API_KEY",
});

const getDecisionsStreamResponse = await crowdsec.bouncers.getDecisionsStream(
  {}
);

console.log(getDecisionsStreamResponse);
```

## Reference<a id="reference"></a>


### `crowdsec.bouncers.getDecisionsStream`<a id="crowdsecbouncersgetdecisionsstream"></a>

Returns a list of new/expired decisions. Intended for bouncers that need to "stream" decisions

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDecisionsStreamResponse = await crowdsec.bouncers.getDecisionsStream(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### startup: `boolean`<a id="startup-boolean"></a>

If true, means that the bouncers is starting and a full list must be provided

##### scopes: `string`<a id="scopes-string"></a>

Comma separated scopes of decisions to fetch

##### origins: `string`<a id="origins-string"></a>

Comma separated name of origins. If provided, then only the decisions originating from provided origins would be returned.

##### scenariosContaining: `string`<a id="scenarioscontaining-string"></a>

Comma separated words. If provided, only the decisions created by scenarios containing any of the provided word would be returned.

##### scenariosNotContaining: `string`<a id="scenariosnotcontaining-string"></a>

Comma separated words. If provided, only the decisions created by scenarios, not containing any of the provided word would be returned.

#### 🔄 Return<a id="🔄-return"></a>

[DecisionsStreamResponse](./models/decisions-stream-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/decisions/stream` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `crowdsec.bouncers.getDecisionsStream_0`<a id="crowdsecbouncersgetdecisionsstream_0"></a>

Returns a list of new/expired decisions. Intended for bouncers that need to "stream" decisions

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDecisionsStream_0Response =
  await crowdsec.bouncers.getDecisionsStream_0({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### startup: `boolean`<a id="startup-boolean"></a>

If true, means that the bouncer is starting and a full list must be provided

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/decisions/stream` `HEAD`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `crowdsec.bouncers.getInformation`<a id="crowdsecbouncersgetinformation"></a>

Returns information about existing decisions

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInformationResponse = await crowdsec.bouncers.getInformation({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### scope: `string`<a id="scope-string"></a>

scope to which the decision applies (ie. IP/Range/Username/Session/...)

##### value: `string`<a id="value-string"></a>

the value to match for in the specified scope

##### type: `string`<a id="type-string"></a>

type of decision

##### ip: `string`<a id="ip-string"></a>

IP to search for (shorthand for scope=ip&value=)

##### range: `string`<a id="range-string"></a>

range to search for (shorthand for scope=range&value=)

##### contains: `boolean`<a id="contains-boolean"></a>

indicate if you\'re looking for a decision that contains the value, or that is contained within the value

##### origins: `string`<a id="origins-string"></a>

Comma separated name of origins. If provided, then only the decisions originating from provided origins would be returned.

##### scenariosContaining: `string`<a id="scenarioscontaining-string"></a>

Comma separated words. If provided, only the decisions created by scenarios containing any of the provided word would be returned.

##### scenariosNotContaining: `string`<a id="scenariosnotcontaining-string"></a>

Comma separated words. If provided, only the decisions created by scenarios, not containing any of the provided word would be returned.

#### 🔄 Return<a id="🔄-return"></a>

[Decision](./models/decision.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/decisions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `crowdsec.bouncers.getInformation_0`<a id="crowdsecbouncersgetinformation_0"></a>

Returns information about existing decisions

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInformation_0Response = await crowdsec.bouncers.getInformation_0({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### scope: `string`<a id="scope-string"></a>

scope to which the decision applies (ie. IP/Range/Username/Session/...)

##### value: `string`<a id="value-string"></a>

the value to match for in the specified scope

##### type: `string`<a id="type-string"></a>

type of decision

##### ip: `string`<a id="ip-string"></a>

IP to search for (shorthand for scope=ip&value=)

##### range: `string`<a id="range-string"></a>

range to search for (shorthand for scope=range&value=)

##### contains: `boolean`<a id="contains-boolean"></a>

indicate if you\'re looking for a decision that contains the value, or that is contained within the value

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/decisions` `HEAD`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `crowdsec.watchers.authenticateSession`<a id="crowdsecwatchersauthenticatesession"></a>

Authenticate current to get session ID

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const authenticateSessionResponse = await crowdsec.watchers.authenticateSession(
  {
    machine_id: "machine_id_example",
    password: "password_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### machine_id: `string`<a id="machine_id-string"></a>

##### password: `string`<a id="password-string"></a>

##### scenarios: `string`[]<a id="scenarios-string"></a>

the list of scenarios enabled on the watcher

#### 🔄 Return<a id="🔄-return"></a>

[WatcherAuthResponse](./models/watcher-auth-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/watchers/login` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `crowdsec.watchers.createAlerts`<a id="crowdsecwatcherscreatealerts"></a>

Push alerts to API

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createAlertsResponse = await crowdsec.watchers.createAlerts([
  {
    scenario: "scenario_example",
    scenario_hash: "scenario_hash_example",
    scenario_version: "scenario_version_example",
    message: "message_example",
    events_count: 1,
    start_at: "start_at_example",
    stop_at: "stop_at_example",
    capacity: 1,
    leakspeed: "leakspeed_example",
    simulated: true,
    events: [
      {
        timestamp: "timestamp_example",
        meta: [{}],
      },
    ],
    source: {
      scope: "scope_example",
      value: "value_example",
    },
  },
]);
```

#### ⚙️ Request Body<a id="⚙️-request-body"></a>

[`Alert`](./models/alert.ts)[]

Push alerts to the API

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/alerts` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `crowdsec.watchers.deleteAlertById`<a id="crowdsecwatchersdeletealertbyid"></a>

Delete alert for given alert ID (only from cscli)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteAlertByIdResponse = await crowdsec.watchers.deleteAlertById({
  alertId: "alertId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### alertId: `string`<a id="alertid-string"></a>



#### 🔄 Return<a id="🔄-return"></a>

[DeleteAlertsResponse](./models/delete-alerts-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/alerts/{alert_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `crowdsec.watchers.getAlertById`<a id="crowdsecwatchersgetalertbyid"></a>

Get alert by ID

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAlertByIdResponse = await crowdsec.watchers.getAlertById({
  alertId: "alertId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### alertId: `string`<a id="alertid-string"></a>



#### 🔄 Return<a id="🔄-return"></a>

[Alert](./models/alert.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/alerts/{alert_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `crowdsec.watchers.getAlertById_0`<a id="crowdsecwatchersgetalertbyid_0"></a>

Get alert by ID

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAlertById_0Response = await crowdsec.watchers.getAlertById_0({
  alertId: "alertId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### alertId: `string`<a id="alertid-string"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/alerts/{alert_id}` `HEAD`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `crowdsec.watchers.listAlerts`<a id="crowdsecwatcherslistalerts"></a>

Allows to search for alerts

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAlertsResponse = await crowdsec.watchers.listAlerts({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### scope: `string`<a id="scope-string"></a>

show alerts for this scope

##### value: `string`<a id="value-string"></a>

show alerts for this value (used with scope)

##### scenario: `string`<a id="scenario-string"></a>

show alerts for this scenario

##### ip: `string`<a id="ip-string"></a>

IP to search for (shorthand for scope=ip&value=)

##### range: `string`<a id="range-string"></a>

range to search for (shorthand for scope=range&value=)

##### since: `string`<a id="since-string"></a>

search alerts newer than delay (format must be compatible with time.ParseDuration)

##### until: `string`<a id="until-string"></a>

search alerts older than delay (format must be compatible with time.ParseDuration)

##### simulated: `boolean`<a id="simulated-boolean"></a>

if set to true, decisions in simulation mode will be returned as well

##### hasActiveDecision: `boolean`<a id="hasactivedecision-boolean"></a>

only return alerts with decisions not expired yet

##### decisionType: `string`<a id="decisiontype-string"></a>

restrict results to alerts with decisions matching given type

##### limit: `number`<a id="limit-number"></a>

number of alerts to return

##### origin: `string`<a id="origin-string"></a>

restrict results to this origin (ie. lists,CAPI,cscli)

#### 🔄 Return<a id="🔄-return"></a>

[Alert](./models/alert.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/alerts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `crowdsec.watchers.registerWatcher`<a id="crowdsecwatchersregisterwatcher"></a>

This method is used when installing crowdsec (cscli->APIL)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const registerWatcherResponse = await crowdsec.watchers.registerWatcher({
  machine_id: "machine_id_example",
  password: "password_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### machine_id: `string`<a id="machine_id-string"></a>

##### password: `string`<a id="password-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/watchers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `crowdsec.watchers.removeAlerts`<a id="crowdsecwatchersremovealerts"></a>

Allows to delete alerts

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeAlertsResponse = await crowdsec.watchers.removeAlerts({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### scope: `string`<a id="scope-string"></a>

delete alerts for this scope

##### value: `string`<a id="value-string"></a>

delete alerts for this value (used with scope)

##### scenario: `string`<a id="scenario-string"></a>

delete alerts for this scenario

##### ip: `string`<a id="ip-string"></a>

delete Alerts with IP (shorthand for scope=ip&value=)

##### range: `string`<a id="range-string"></a>

delete alerts concerned by range (shorthand for scope=range&value=)

##### since: `string`<a id="since-string"></a>

delete alerts added after YYYY-mm-DD-HH:MM:SS

##### until: `string`<a id="until-string"></a>

delete alerts added before YYYY-mm-DD-HH:MM:SS

##### hasActiveDecision: `boolean`<a id="hasactivedecision-boolean"></a>

delete only alerts with decisions not expired yet

##### alertSource: `string`<a id="alertsource-string"></a>

delete only alerts with matching source (ie. cscli/crowdsec)

#### 🔄 Return<a id="🔄-return"></a>

[DeleteAlertsResponse](./models/delete-alerts-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/alerts` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `crowdsec.watchers.removeDecisionById`<a id="crowdsecwatchersremovedecisionbyid"></a>

Delete decision for given decision ID (only from cscli)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeDecisionByIdResponse = await crowdsec.watchers.removeDecisionById({
  decisionId: "decisionId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### decisionId: `string`<a id="decisionid-string"></a>



#### 🔄 Return<a id="🔄-return"></a>

[DeleteDecisionResponse](./models/delete-decision-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/decisions/{decision_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `crowdsec.watchers.removeDecisions`<a id="crowdsecwatchersremovedecisions"></a>

Delete decisions(s) for given filters (only from cscli)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeDecisionsResponse = await crowdsec.watchers.removeDecisions({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### scope: `string`<a id="scope-string"></a>

scope to which the decision applies (ie. IP/Range/Username/Session/...)

##### value: `string`<a id="value-string"></a>

the value to match for in the specified scope

##### type: `string`<a id="type-string"></a>

type of decision

##### ip: `string`<a id="ip-string"></a>

IP to search for (shorthand for scope=ip&value=)

##### range: `string`<a id="range-string"></a>

range to search for (shorthand for scope=range&value=)

##### scenario: `string`<a id="scenario-string"></a>

scenario to search

#### 🔄 Return<a id="🔄-return"></a>

[DeleteDecisionResponse](./models/delete-decision-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/decisions` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `crowdsec.watchers.searchAlerts`<a id="crowdsecwatcherssearchalerts"></a>

Allows to search for alerts

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchAlertsResponse = await crowdsec.watchers.searchAlerts({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### scope: `string`<a id="scope-string"></a>

show alerts for this scope

##### value: `string`<a id="value-string"></a>

show alerts for this value (used with scope)

##### scenario: `string`<a id="scenario-string"></a>

show alerts for this scenario

##### ip: `string`<a id="ip-string"></a>

IP to search for (shorthand for scope=ip&value=)

##### range: `string`<a id="range-string"></a>

range to search for (shorthand for scope=range&value=)

##### since: `string`<a id="since-string"></a>

search alerts newer than delay (format must be compatible with time.ParseDuration)

##### until: `string`<a id="until-string"></a>

search alerts older than delay (format must be compatible with time.ParseDuration)

##### simulated: `boolean`<a id="simulated-boolean"></a>

if set to true, decisions in simulation mode will be returned as well

##### hasActiveDecision: `boolean`<a id="hasactivedecision-boolean"></a>

only return alerts with decisions not expired yet

##### decisionType: `string`<a id="decisiontype-string"></a>

restrict results to alerts with decisions matching given type

##### limit: `number`<a id="limit-number"></a>

number of alerts to return

##### origin: `string`<a id="origin-string"></a>

restrict results to this origin (ie. lists,CAPI,cscli)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/alerts` `HEAD`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
