﻿/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../3rdparty/ibas/index.d.ts" />
/// <reference path="../api/index.ts" />
/// <reference path="./bo/GoodsIssue.ts" />
/// <reference path="./bo/GoodsReceipt.ts" />
/// <reference path="./bo/InventoryTransfer.ts" />
/// <reference path="./bo/Material.ts" />
/// <reference path="./bo/MaterialBatch.ts" />
/// <reference path="./bo/MaterialBatchJournal.ts" />
/// <reference path="./bo/MaterialGroup.ts" />
/// <reference path="./bo/MaterialInventory.ts" />
/// <reference path="./bo/MaterialInventoryJournal.ts" />
/// <reference path="./bo/MaterialPriceList.ts" />
/// <reference path="./bo/MaterialSerial.ts" />
/// <reference path="./bo/MaterialSerialJournal.ts" />
/// <reference path="./bo/Product.ts" />
/// <reference path="./bo/Warehouse.ts" />
/// <reference path="./DataConverter.ts" />
/// <reference path="./BORepository.ts" />

namespace materials {
    export namespace bo {
        // 注册业务对象仓库到工厂
        boFactory.register(BO_REPOSITORY_MATERIALS, BORepositoryMaterials);
        // 注册业务对象到工厂
        boFactory.register(MaterialPrice);
        boFactory.register(MaterialQuantity);
        boFactory.register(GoodsIssue.BUSINESS_OBJECT_CODE, GoodsIssue);
        boFactory.register(GoodsReceipt.BUSINESS_OBJECT_CODE, GoodsReceipt);
        boFactory.register(InventoryTransfer.BUSINESS_OBJECT_CODE, InventoryTransfer);
        boFactory.register(Material.BUSINESS_OBJECT_CODE, Material);
        boFactory.register(Product.BUSINESS_OBJECT_CODE, Product);
        boFactory.register(MaterialGroup.BUSINESS_OBJECT_CODE, MaterialGroup);
        boFactory.register(MaterialInventory.BUSINESS_OBJECT_CODE, MaterialInventory);
        boFactory.register(MaterialInventoryJournal.BUSINESS_OBJECT_CODE, MaterialInventoryJournal);
        boFactory.register(Warehouse.BUSINESS_OBJECT_CODE, Warehouse);
        boFactory.register(MaterialBatch.BUSINESS_OBJECT_CODE, MaterialBatch);
        boFactory.register(MaterialSerial.BUSINESS_OBJECT_CODE, MaterialSerial);
        boFactory.register(MaterialPriceList.BUSINESS_OBJECT_CODE, MaterialPriceList);
        boFactory.register(MaterialBatchJournal.BUSINESS_OBJECT_CODE, MaterialBatchJournal);
        boFactory.register(MaterialSerialJournal.BUSINESS_OBJECT_CODE, MaterialSerialJournal);
    }
}