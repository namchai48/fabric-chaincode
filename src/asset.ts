/*
  SPDX-License-Identifier: Apache-2.0
*/

import {Object, Property} from 'fabric-contract-api';

@Object()
export class Asset {
    @Property()
    public docType?: string;

    @Property()
    public ID: string;

    @Property()
    public Owner: string;

    @Property()
    public Balance: number;

    @Property()
    public Amount: number;

    @Property()
    public From: string;

    @Property()
    public To: string;

}
