/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define((require, exports, module) => {

  'use strict';

  const Model = Record({
    id: String,
    navigation: Navigaton.Model,
    shell: Shell.Model,
    input: Editable.Model,
  });

});
