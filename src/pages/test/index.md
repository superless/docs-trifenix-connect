<a name='assembly'></a>
# trifenix.connect.mdm

## Contents

- [AutoNumericDependantAttribute](#T-trifenix-connect-mdm_attributes-AutoNumericDependantAttribute 'trifenix.connect.mdm_attributes.AutoNumericDependantAttribute')
  - [Dependant](#P-trifenix-connect-mdm_attributes-AutoNumericDependantAttribute-Dependant 'trifenix.connect.mdm_attributes.AutoNumericDependantAttribute.Dependant')
- [BaseIndexAttribute](#T-trifenix-connect-mdm_attributes-BaseIndexAttribute 'trifenix.connect.mdm_attributes.BaseIndexAttribute')
  - [Index](#P-trifenix-connect-mdm_attributes-BaseIndexAttribute-Index 'trifenix.connect.mdm_attributes.BaseIndexAttribute.Index')
  - [IsEntity](#P-trifenix-connect-mdm_attributes-BaseIndexAttribute-IsEntity 'trifenix.connect.mdm_attributes.BaseIndexAttribute.IsEntity')
  - [KindIndex](#P-trifenix-connect-mdm_attributes-BaseIndexAttribute-KindIndex 'trifenix.connect.mdm_attributes.BaseIndexAttribute.KindIndex')
  - [Visible](#P-trifenix-connect-mdm_attributes-BaseIndexAttribute-Visible 'trifenix.connect.mdm_attributes.BaseIndexAttribute.Visible')
- [BoolBaseProperty](#T-trifenix-connect-mdm-entity_model-BoolBaseProperty 'trifenix.connect.mdm.entity_model.BoolBaseProperty')
- [CollectionResult](#T-trifenix-connect-mdm-ts_model-CollectionResult 'trifenix.connect.mdm.ts_model.CollectionResult')
  - [Current](#P-trifenix-connect-mdm-ts_model-CollectionResult-Current 'trifenix.connect.mdm.ts_model.CollectionResult.Current')
  - [Entities](#P-trifenix-connect-mdm-ts_model-CollectionResult-Entities 'trifenix.connect.mdm.ts_model.CollectionResult.Entities')
  - [Facets](#P-trifenix-connect-mdm-ts_model-CollectionResult-Facets 'trifenix.connect.mdm.ts_model.CollectionResult.Facets')
  - [Filter](#P-trifenix-connect-mdm-ts_model-CollectionResult-Filter 'trifenix.connect.mdm.ts_model.CollectionResult.Filter')
  - [IndexPropDefaultName](#P-trifenix-connect-mdm-ts_model-CollectionResult-IndexPropDefaultName 'trifenix.connect.mdm.ts_model.CollectionResult.IndexPropDefaultName')
  - [IndexPropNames](#P-trifenix-connect-mdm-ts_model-CollectionResult-IndexPropNames 'trifenix.connect.mdm.ts_model.CollectionResult.IndexPropNames')
  - [OrderItems](#P-trifenix-connect-mdm-ts_model-CollectionResult-OrderItems 'trifenix.connect.mdm.ts_model.CollectionResult.OrderItems')
  - [Total](#P-trifenix-connect-mdm-ts_model-CollectionResult-Total 'trifenix.connect.mdm.ts_model.CollectionResult.Total')
- [DblBaseProperty](#T-trifenix-connect-mdm-entity_model-DblBaseProperty 'trifenix.connect.mdm.entity_model.DblBaseProperty')
- [DblProperty](#T-trifenix-connect-mdm-ts_model-props-DblProperty 'trifenix.connect.mdm.ts_model.props.DblProperty')
- [EntityBaseSearch\`1](#T-trifenix-connect-mdm-entity_model-EntityBaseSearch`1 'trifenix.connect.mdm.entity_model.EntityBaseSearch`1')
  - [bl](#P-trifenix-connect-mdm-entity_model-EntityBaseSearch`1-bl 'trifenix.connect.mdm.entity_model.EntityBaseSearch`1.bl')
  - [created](#P-trifenix-connect-mdm-entity_model-EntityBaseSearch`1-created 'trifenix.connect.mdm.entity_model.EntityBaseSearch`1.created')
  - [dbl](#P-trifenix-connect-mdm-entity_model-EntityBaseSearch`1-dbl 'trifenix.connect.mdm.entity_model.EntityBaseSearch`1.dbl')
  - [dt](#P-trifenix-connect-mdm-entity_model-EntityBaseSearch`1-dt 'trifenix.connect.mdm.entity_model.EntityBaseSearch`1.dt')
  - [enm](#P-trifenix-connect-mdm-entity_model-EntityBaseSearch`1-enm 'trifenix.connect.mdm.entity_model.EntityBaseSearch`1.enm')
  - [geo](#P-trifenix-connect-mdm-entity_model-EntityBaseSearch`1-geo 'trifenix.connect.mdm.entity_model.EntityBaseSearch`1.geo')
  - [id](#P-trifenix-connect-mdm-entity_model-EntityBaseSearch`1-id 'trifenix.connect.mdm.entity_model.EntityBaseSearch`1.id')
  - [index](#P-trifenix-connect-mdm-entity_model-EntityBaseSearch`1-index 'trifenix.connect.mdm.entity_model.EntityBaseSearch`1.index')
  - [num32](#P-trifenix-connect-mdm-entity_model-EntityBaseSearch`1-num32 'trifenix.connect.mdm.entity_model.EntityBaseSearch`1.num32')
  - [num64](#P-trifenix-connect-mdm-entity_model-EntityBaseSearch`1-num64 'trifenix.connect.mdm.entity_model.EntityBaseSearch`1.num64')
  - [rel](#P-trifenix-connect-mdm-entity_model-EntityBaseSearch`1-rel 'trifenix.connect.mdm.entity_model.EntityBaseSearch`1.rel')
  - [str](#P-trifenix-connect-mdm-entity_model-EntityBaseSearch`1-str 'trifenix.connect.mdm.entity_model.EntityBaseSearch`1.str')
  - [sug](#P-trifenix-connect-mdm-entity_model-EntityBaseSearch`1-sug 'trifenix.connect.mdm.entity_model.EntityBaseSearch`1.sug')
- [EntityGroupMenuAttribute](#T-trifenix-connect-mdm_attributes-EntityGroupMenuAttribute 'trifenix.connect.mdm_attributes.EntityGroupMenuAttribute')
- [EntityIndexAttribute](#T-trifenix-connect-mdm_attributes-EntityIndexAttribute 'trifenix.connect.mdm_attributes.EntityIndexAttribute')
  - [Kind](#P-trifenix-connect-mdm_attributes-EntityIndexAttribute-Kind 'trifenix.connect.mdm_attributes.EntityIndexAttribute.Kind')
  - [PathName](#P-trifenix-connect-mdm_attributes-EntityIndexAttribute-PathName 'trifenix.connect.mdm_attributes.EntityIndexAttribute.PathName')
- [EntityIndexRelatedPropertyAttribute](#T-trifenix-connect-mdm_attributes-EntityIndexRelatedPropertyAttribute 'trifenix.connect.mdm_attributes.EntityIndexRelatedPropertyAttribute')
  - [#ctor()](#M-trifenix-connect-mdm_attributes-EntityIndexRelatedPropertyAttribute-#ctor 'trifenix.connect.mdm_attributes.EntityIndexRelatedPropertyAttribute.#ctor')
  - [Bypass](#P-trifenix-connect-mdm_attributes-EntityIndexRelatedPropertyAttribute-Bypass 'trifenix.connect.mdm_attributes.EntityIndexRelatedPropertyAttribute.Bypass')
- [EntityKind](#T-trifenix-connect-mdm-enums-EntityKind 'trifenix.connect.mdm.enums.EntityKind')
- [EntityMetadata](#T-trifenix-connect-mdm-ts_model-EntityMetadata 'trifenix.connect.mdm.ts_model.EntityMetadata')
  - [AutoNumeric](#P-trifenix-connect-mdm-ts_model-EntityMetadata-AutoNumeric 'trifenix.connect.mdm.ts_model.EntityMetadata.AutoNumeric')
  - [BoolData](#P-trifenix-connect-mdm-ts_model-EntityMetadata-BoolData 'trifenix.connect.mdm.ts_model.EntityMetadata.BoolData')
  - [ClassName](#P-trifenix-connect-mdm-ts_model-EntityMetadata-ClassName 'trifenix.connect.mdm.ts_model.EntityMetadata.ClassName')
  - [DateData](#P-trifenix-connect-mdm-ts_model-EntityMetadata-DateData 'trifenix.connect.mdm.ts_model.EntityMetadata.DateData')
  - [Description](#P-trifenix-connect-mdm-ts_model-EntityMetadata-Description 'trifenix.connect.mdm.ts_model.EntityMetadata.Description')
  - [DoubleData](#P-trifenix-connect-mdm-ts_model-EntityMetadata-DoubleData 'trifenix.connect.mdm.ts_model.EntityMetadata.DoubleData')
  - [EntityKind](#P-trifenix-connect-mdm-ts_model-EntityMetadata-EntityKind 'trifenix.connect.mdm.ts_model.EntityMetadata.EntityKind')
  - [EnumData](#P-trifenix-connect-mdm-ts_model-EntityMetadata-EnumData 'trifenix.connect.mdm.ts_model.EntityMetadata.EnumData')
  - [GeoData](#P-trifenix-connect-mdm-ts_model-EntityMetadata-GeoData 'trifenix.connect.mdm.ts_model.EntityMetadata.GeoData')
  - [Index](#P-trifenix-connect-mdm-ts_model-EntityMetadata-Index 'trifenix.connect.mdm.ts_model.EntityMetadata.Index')
  - [NumData](#P-trifenix-connect-mdm-ts_model-EntityMetadata-NumData 'trifenix.connect.mdm.ts_model.EntityMetadata.NumData')
  - [PathName](#P-trifenix-connect-mdm-ts_model-EntityMetadata-PathName 'trifenix.connect.mdm.ts_model.EntityMetadata.PathName')
  - [ShortName](#P-trifenix-connect-mdm-ts_model-EntityMetadata-ShortName 'trifenix.connect.mdm.ts_model.EntityMetadata.ShortName')
  - [StringData](#P-trifenix-connect-mdm-ts_model-EntityMetadata-StringData 'trifenix.connect.mdm.ts_model.EntityMetadata.StringData')
  - [Title](#P-trifenix-connect-mdm-ts_model-EntityMetadata-Title 'trifenix.connect.mdm.ts_model.EntityMetadata.Title')
  - [Visible](#P-trifenix-connect-mdm-ts_model-EntityMetadata-Visible 'trifenix.connect.mdm.ts_model.EntityMetadata.Visible')
  - [relData](#P-trifenix-connect-mdm-ts_model-EntityMetadata-relData 'trifenix.connect.mdm.ts_model.EntityMetadata.relData')
- [EntitySearchDisplayInfo](#T-trifenix-connect-mdm-ts_model-EntitySearchDisplayInfo 'trifenix.connect.mdm.ts_model.EntitySearchDisplayInfo')
  - [Column](#P-trifenix-connect-mdm-ts_model-EntitySearchDisplayInfo-Column 'trifenix.connect.mdm.ts_model.EntitySearchDisplayInfo.Column')
  - [Description](#P-trifenix-connect-mdm-ts_model-EntitySearchDisplayInfo-Description 'trifenix.connect.mdm.ts_model.EntitySearchDisplayInfo.Description')
  - [ShortName](#P-trifenix-connect-mdm-ts_model-EntitySearchDisplayInfo-ShortName 'trifenix.connect.mdm.ts_model.EntitySearchDisplayInfo.ShortName')
  - [Title](#P-trifenix-connect-mdm-ts_model-EntitySearchDisplayInfo-Title 'trifenix.connect.mdm.ts_model.EntitySearchDisplayInfo.Title')
- [ExtGetContainer\`1](#T-trifenix-connect-mdm-containers-ExtGetContainer`1 'trifenix.connect.mdm.containers.ExtGetContainer`1')
  - [ErrorMessage](#P-trifenix-connect-mdm-containers-ExtGetContainer`1-ErrorMessage 'trifenix.connect.mdm.containers.ExtGetContainer`1.ErrorMessage')
  - [Result](#P-trifenix-connect-mdm-containers-ExtGetContainer`1-Result 'trifenix.connect.mdm.containers.ExtGetContainer`1.Result')
  - [StatusResult](#P-trifenix-connect-mdm-containers-ExtGetContainer`1-StatusResult 'trifenix.connect.mdm.containers.ExtGetContainer`1.StatusResult')
- [ExtGetDataResult](#T-trifenix-connect-mdm-enums-ExtGetDataResult 'trifenix.connect.mdm.enums.ExtGetDataResult')
- [ExtGetErrorContainer\`1](#T-trifenix-connect-mdm-containers-ExtGetErrorContainer`1 'trifenix.connect.mdm.containers.ExtGetErrorContainer`1')
  - [GetBase](#P-trifenix-connect-mdm-containers-ExtGetErrorContainer`1-GetBase 'trifenix.connect.mdm.containers.ExtGetErrorContainer`1.GetBase')
  - [InternalException](#P-trifenix-connect-mdm-containers-ExtGetErrorContainer`1-InternalException 'trifenix.connect.mdm.containers.ExtGetErrorContainer`1.InternalException')
- [ExtMessageResult](#T-trifenix-connect-mdm-enums-ExtMessageResult 'trifenix.connect.mdm.enums.ExtMessageResult')
- [ExtPostContainer\`1](#T-trifenix-connect-mdm-containers-ExtPostContainer`1 'trifenix.connect.mdm.containers.ExtPostContainer`1')
  - [IdRelated](#P-trifenix-connect-mdm-containers-ExtPostContainer`1-IdRelated 'trifenix.connect.mdm.containers.ExtPostContainer`1.IdRelated')
  - [Message](#P-trifenix-connect-mdm-containers-ExtPostContainer`1-Message 'trifenix.connect.mdm.containers.ExtPostContainer`1.Message')
  - [MessageResult](#P-trifenix-connect-mdm-containers-ExtPostContainer`1-MessageResult 'trifenix.connect.mdm.containers.ExtPostContainer`1.MessageResult')
  - [Result](#P-trifenix-connect-mdm-containers-ExtPostContainer`1-Result 'trifenix.connect.mdm.containers.ExtPostContainer`1.Result')
- [ExtPostErrorContainer\`1](#T-trifenix-connect-mdm-containers-ExtPostErrorContainer`1 'trifenix.connect.mdm.containers.ExtPostErrorContainer`1')
  - [_validationMessages](#F-trifenix-connect-mdm-containers-ExtPostErrorContainer`1-_validationMessages 'trifenix.connect.mdm.containers.ExtPostErrorContainer`1._validationMessages')
  - [GetBase](#P-trifenix-connect-mdm-containers-ExtPostErrorContainer`1-GetBase 'trifenix.connect.mdm.containers.ExtPostErrorContainer`1.GetBase')
  - [InternalException](#P-trifenix-connect-mdm-containers-ExtPostErrorContainer`1-InternalException 'trifenix.connect.mdm.containers.ExtPostErrorContainer`1.InternalException')
  - [ValidationMessages](#P-trifenix-connect-mdm-containers-ExtPostErrorContainer`1-ValidationMessages 'trifenix.connect.mdm.containers.ExtPostErrorContainer`1.ValidationMessages')
- [Facet](#T-trifenix-connect-mdm-ts_model-Facet 'trifenix.connect.mdm.ts_model.Facet')
  - [Count](#P-trifenix-connect-mdm-ts_model-Facet-Count 'trifenix.connect.mdm.ts_model.Facet.Count')
  - [Index](#P-trifenix-connect-mdm-ts_model-Facet-Index 'trifenix.connect.mdm.ts_model.Facet.Index')
  - [Title](#P-trifenix-connect-mdm-ts_model-Facet-Title 'trifenix.connect.mdm.ts_model.Facet.Title')
  - [Value](#P-trifenix-connect-mdm-ts_model-Facet-Value 'trifenix.connect.mdm.ts_model.Facet.Value')
- [FilterBase\`1](#T-trifenix-connect-mdm-ts_model-FilterBase`1 'trifenix.connect.mdm.ts_model.FilterBase`1')
  - [FilterType](#P-trifenix-connect-mdm-ts_model-FilterBase`1-FilterType 'trifenix.connect.mdm.ts_model.FilterBase`1.FilterType')
  - [Value](#P-trifenix-connect-mdm-ts_model-FilterBase`1-Value 'trifenix.connect.mdm.ts_model.FilterBase`1.Value')
- [FilterGlobalEntityInput](#T-trifenix-connect-mdm-ts_model-FilterGlobalEntityInput 'trifenix.connect.mdm.ts_model.FilterGlobalEntityInput')
  - [EntitiesSelected](#P-trifenix-connect-mdm-ts_model-FilterGlobalEntityInput-EntitiesSelected 'trifenix.connect.mdm.ts_model.FilterGlobalEntityInput.EntitiesSelected')
  - [FilterChilds](#P-trifenix-connect-mdm-ts_model-FilterGlobalEntityInput-FilterChilds 'trifenix.connect.mdm.ts_model.FilterGlobalEntityInput.FilterChilds')
  - [indexMain](#P-trifenix-connect-mdm-ts_model-FilterGlobalEntityInput-indexMain 'trifenix.connect.mdm.ts_model.FilterGlobalEntityInput.indexMain')
- [FilterModel](#T-trifenix-connect-mdm-ts_model-FilterModel 'trifenix.connect.mdm.ts_model.FilterModel')
  - [BoolFilters](#P-trifenix-connect-mdm-ts_model-FilterModel-BoolFilters 'trifenix.connect.mdm.ts_model.FilterModel.BoolFilters')
  - [DateFilters](#P-trifenix-connect-mdm-ts_model-FilterModel-DateFilters 'trifenix.connect.mdm.ts_model.FilterModel.DateFilters')
  - [DoubleFilters](#P-trifenix-connect-mdm-ts_model-FilterModel-DoubleFilters 'trifenix.connect.mdm.ts_model.FilterModel.DoubleFilters')
  - [EnumFilter](#P-trifenix-connect-mdm-ts_model-FilterModel-EnumFilter 'trifenix.connect.mdm.ts_model.FilterModel.EnumFilter')
  - [FilterEntity](#P-trifenix-connect-mdm-ts_model-FilterModel-FilterEntity 'trifenix.connect.mdm.ts_model.FilterModel.FilterEntity')
  - [FilterStr](#P-trifenix-connect-mdm-ts_model-FilterModel-FilterStr 'trifenix.connect.mdm.ts_model.FilterModel.FilterStr')
  - [LongFilter](#P-trifenix-connect-mdm-ts_model-FilterModel-LongFilter 'trifenix.connect.mdm.ts_model.FilterModel.LongFilter')
  - [NumFilter](#P-trifenix-connect-mdm-ts_model-FilterModel-NumFilter 'trifenix.connect.mdm.ts_model.FilterModel.NumFilter')
- [GeoPointTs](#T-trifenix-connect-mdm-ts_model-GeoPointTs 'trifenix.connect.mdm.ts_model.GeoPointTs')
  - [latitude](#P-trifenix-connect-mdm-ts_model-GeoPointTs-latitude 'trifenix.connect.mdm.ts_model.GeoPointTs.latitude')
  - [longitude](#P-trifenix-connect-mdm-ts_model-GeoPointTs-longitude 'trifenix.connect.mdm.ts_model.GeoPointTs.longitude')
- [GeographyProperty](#T-trifenix-connect-mdm-ts_model-GeographyProperty 'trifenix.connect.mdm.ts_model.GeographyProperty')
  - [index](#P-trifenix-connect-mdm-ts_model-GeographyProperty-index 'trifenix.connect.mdm.ts_model.GeographyProperty.index')
  - [value](#P-trifenix-connect-mdm-ts_model-GeographyProperty-value 'trifenix.connect.mdm.ts_model.GeographyProperty.value')
- [GroupAttribute](#T-trifenix-connect-mdm_attributes-GroupAttribute 'trifenix.connect.mdm_attributes.GroupAttribute')
- [GroupInput](#T-trifenix-connect-mdm-ts_model-GroupInput 'trifenix.connect.mdm.ts_model.GroupInput')
  - [ColumnProportion](#P-trifenix-connect-mdm-ts_model-GroupInput-ColumnProportion 'trifenix.connect.mdm.ts_model.GroupInput.ColumnProportion')
  - [Device](#P-trifenix-connect-mdm-ts_model-GroupInput-Device 'trifenix.connect.mdm.ts_model.GroupInput.Device')
  - [OrderIndex](#P-trifenix-connect-mdm-ts_model-GroupInput-OrderIndex 'trifenix.connect.mdm.ts_model.GroupInput.OrderIndex')
  - [Title](#P-trifenix-connect-mdm-ts_model-GroupInput-Title 'trifenix.connect.mdm.ts_model.GroupInput.Title')
- [GroupMenu](#T-trifenix-connect-mdm-ts_model-GroupMenu 'trifenix.connect.mdm.ts_model.GroupMenu')
  - [Device](#P-trifenix-connect-mdm-ts_model-GroupMenu-Device 'trifenix.connect.mdm.ts_model.GroupMenu.Device')
  - [MenuIndex](#P-trifenix-connect-mdm-ts_model-GroupMenu-MenuIndex 'trifenix.connect.mdm.ts_model.GroupMenu.MenuIndex')
  - [SubMenuIndex](#P-trifenix-connect-mdm-ts_model-GroupMenu-SubMenuIndex 'trifenix.connect.mdm.ts_model.GroupMenu.SubMenuIndex')
- [IBoolProperty](#T-trifenix-connect-mdm-entity_model-IBoolProperty 'trifenix.connect.mdm.entity_model.IBoolProperty')
- [IDblProperty](#T-trifenix-connect-mdm-entity_model-IDblProperty 'trifenix.connect.mdm.entity_model.IDblProperty')
- [IDtProperty](#T-trifenix-connect-mdm-entity_model-IDtProperty 'trifenix.connect.mdm.entity_model.IDtProperty')
- [IEntitySearch\`1](#T-trifenix-connect-mdm-entity_model-IEntitySearch`1 'trifenix.connect.mdm.entity_model.IEntitySearch`1')
  - [bl](#P-trifenix-connect-mdm-entity_model-IEntitySearch`1-bl 'trifenix.connect.mdm.entity_model.IEntitySearch`1.bl')
  - [created](#P-trifenix-connect-mdm-entity_model-IEntitySearch`1-created 'trifenix.connect.mdm.entity_model.IEntitySearch`1.created')
  - [dbl](#P-trifenix-connect-mdm-entity_model-IEntitySearch`1-dbl 'trifenix.connect.mdm.entity_model.IEntitySearch`1.dbl')
  - [dt](#P-trifenix-connect-mdm-entity_model-IEntitySearch`1-dt 'trifenix.connect.mdm.entity_model.IEntitySearch`1.dt')
  - [enm](#P-trifenix-connect-mdm-entity_model-IEntitySearch`1-enm 'trifenix.connect.mdm.entity_model.IEntitySearch`1.enm')
  - [geo](#P-trifenix-connect-mdm-entity_model-IEntitySearch`1-geo 'trifenix.connect.mdm.entity_model.IEntitySearch`1.geo')
  - [hh](#P-trifenix-connect-mdm-entity_model-IEntitySearch`1-hh 'trifenix.connect.mdm.entity_model.IEntitySearch`1.hh')
  - [hm](#P-trifenix-connect-mdm-entity_model-IEntitySearch`1-hm 'trifenix.connect.mdm.entity_model.IEntitySearch`1.hm')
  - [id](#P-trifenix-connect-mdm-entity_model-IEntitySearch`1-id 'trifenix.connect.mdm.entity_model.IEntitySearch`1.id')
  - [index](#P-trifenix-connect-mdm-entity_model-IEntitySearch`1-index 'trifenix.connect.mdm.entity_model.IEntitySearch`1.index')
  - [num32](#P-trifenix-connect-mdm-entity_model-IEntitySearch`1-num32 'trifenix.connect.mdm.entity_model.IEntitySearch`1.num32')
  - [num64](#P-trifenix-connect-mdm-entity_model-IEntitySearch`1-num64 'trifenix.connect.mdm.entity_model.IEntitySearch`1.num64')
  - [rel](#P-trifenix-connect-mdm-entity_model-IEntitySearch`1-rel 'trifenix.connect.mdm.entity_model.IEntitySearch`1.rel')
  - [str](#P-trifenix-connect-mdm-entity_model-IEntitySearch`1-str 'trifenix.connect.mdm.entity_model.IEntitySearch`1.str')
  - [sug](#P-trifenix-connect-mdm-entity_model-IEntitySearch`1-sug 'trifenix.connect.mdm.entity_model.IEntitySearch`1.sug')
- [IEnumProperty](#T-trifenix-connect-mdm-entity_model-IEnumProperty 'trifenix.connect.mdm.entity_model.IEnumProperty')
- [INum32Property](#T-trifenix-connect-mdm-entity_model-INum32Property 'trifenix.connect.mdm.entity_model.INum32Property')
- [INum64Property](#T-trifenix-connect-mdm-entity_model-INum64Property 'trifenix.connect.mdm.entity_model.INum64Property')
- [IPropertyBaseFaceTable\`1](#T-trifenix-connect-mdm-entity_model-IPropertyBaseFaceTable`1 'trifenix.connect.mdm.entity_model.IPropertyBaseFaceTable`1')
- [IPropertyFaceTable](#T-trifenix-connect-mdm-entity_model-IPropertyFaceTable 'trifenix.connect.mdm.entity_model.IPropertyFaceTable')
  - [facet](#P-trifenix-connect-mdm-entity_model-IPropertyFaceTable-facet 'trifenix.connect.mdm.entity_model.IPropertyFaceTable.facet')
- [IProperty\`1](#T-trifenix-connect-mdm-entity_model-IProperty`1 'trifenix.connect.mdm.entity_model.IProperty`1')
  - [index](#P-trifenix-connect-mdm-entity_model-IProperty`1-index 'trifenix.connect.mdm.entity_model.IProperty`1.index')
  - [value](#P-trifenix-connect-mdm-entity_model-IProperty`1-value 'trifenix.connect.mdm.entity_model.IProperty`1.value')
- [IRelatedId](#T-trifenix-connect-mdm-entity_model-IRelatedId 'trifenix.connect.mdm.entity_model.IRelatedId')
  - [id](#P-trifenix-connect-mdm-entity_model-IRelatedId-id 'trifenix.connect.mdm.entity_model.IRelatedId.id')
  - [index](#P-trifenix-connect-mdm-entity_model-IRelatedId-index 'trifenix.connect.mdm.entity_model.IRelatedId.index')
- [IStrProperty](#T-trifenix-connect-mdm-entity_model-IStrProperty 'trifenix.connect.mdm.entity_model.IStrProperty')
- [KindEntityProperty](#T-trifenix-connect-mdm-enums-KindEntityProperty 'trifenix.connect.mdm.enums.KindEntityProperty')
- [KindProperty](#T-trifenix-connect-mdm-enums-KindProperty 'trifenix.connect.mdm.enums.KindProperty')
- [ModelMetaData](#T-trifenix-connect-mdm-ts_model-ModelMetaData 'trifenix.connect.mdm.ts_model.ModelMetaData')
  - [Indexes](#P-trifenix-connect-mdm-ts_model-ModelMetaData-Indexes 'trifenix.connect.mdm.ts_model.ModelMetaData.Indexes')
- [OrderItem](#T-trifenix-connect-mdm-ts_model-OrderItem 'trifenix.connect.mdm.ts_model.OrderItem')
  - [Desc](#P-trifenix-connect-mdm-ts_model-OrderItem-Desc 'trifenix.connect.mdm.ts_model.OrderItem.Desc')
  - [KindProperty](#P-trifenix-connect-mdm-ts_model-OrderItem-KindProperty 'trifenix.connect.mdm.ts_model.OrderItem.KindProperty')
  - [PropertyIndex](#P-trifenix-connect-mdm-ts_model-OrderItem-PropertyIndex 'trifenix.connect.mdm.ts_model.OrderItem.PropertyIndex')
- [PhisicalDevice](#T-trifenix-connect-mdm-enums-PhisicalDevice 'trifenix.connect.mdm.enums.PhisicalDevice')
- [PropertyIndexAttribute](#T-trifenix-connect-mdm_attributes-PropertyIndexAttribute 'trifenix.connect.mdm_attributes.PropertyIndexAttribute')
  - [#ctor()](#M-trifenix-connect-mdm_attributes-PropertyIndexAttribute-#ctor 'trifenix.connect.mdm_attributes.PropertyIndexAttribute.#ctor')
  - [Related](#P-trifenix-connect-mdm_attributes-PropertyIndexAttribute-Related 'trifenix.connect.mdm_attributes.PropertyIndexAttribute.Related')
- [PropertyMetadadataEnum](#T-trifenix-connect-mdm-ts_model-PropertyMetadadataEnum 'trifenix.connect.mdm.ts_model.PropertyMetadadataEnum')
  - [EnumData](#P-trifenix-connect-mdm-ts_model-PropertyMetadadataEnum-EnumData 'trifenix.connect.mdm.ts_model.PropertyMetadadataEnum.EnumData')
- [PropertyMetadata](#T-trifenix-connect-mdm-ts_model-PropertyMetadata 'trifenix.connect.mdm.ts_model.PropertyMetadata')
  - [AutoNumeric](#P-trifenix-connect-mdm-ts_model-PropertyMetadata-AutoNumeric 'trifenix.connect.mdm.ts_model.PropertyMetadata.AutoNumeric')
  - [HasInput](#P-trifenix-connect-mdm-ts_model-PropertyMetadata-HasInput 'trifenix.connect.mdm.ts_model.PropertyMetadata.HasInput')
  - [Info](#P-trifenix-connect-mdm-ts_model-PropertyMetadata-Info 'trifenix.connect.mdm.ts_model.PropertyMetadata.Info')
  - [NameProp](#P-trifenix-connect-mdm-ts_model-PropertyMetadata-NameProp 'trifenix.connect.mdm.ts_model.PropertyMetadata.NameProp')
  - [Required](#P-trifenix-connect-mdm-ts_model-PropertyMetadata-Required 'trifenix.connect.mdm.ts_model.PropertyMetadata.Required')
  - [Unique](#P-trifenix-connect-mdm-ts_model-PropertyMetadata-Unique 'trifenix.connect.mdm.ts_model.PropertyMetadata.Unique')
  - [Visible](#P-trifenix-connect-mdm-ts_model-PropertyMetadata-Visible 'trifenix.connect.mdm.ts_model.PropertyMetadata.Visible')
  - [isArray](#P-trifenix-connect-mdm-ts_model-PropertyMetadata-isArray 'trifenix.connect.mdm.ts_model.PropertyMetadata.isArray')
- [PropertySearchInfo](#T-trifenix-connect-mdm-ts_model-PropertySearchInfo 'trifenix.connect.mdm.ts_model.PropertySearchInfo')
  - [AutoNumeric](#P-trifenix-connect-mdm-ts_model-PropertySearchInfo-AutoNumeric 'trifenix.connect.mdm.ts_model.PropertySearchInfo.AutoNumeric')
  - [Enums](#P-trifenix-connect-mdm-ts_model-PropertySearchInfo-Enums 'trifenix.connect.mdm.ts_model.PropertySearchInfo.Enums')
  - [Group](#P-trifenix-connect-mdm-ts_model-PropertySearchInfo-Group 'trifenix.connect.mdm.ts_model.PropertySearchInfo.Group')
  - [HasInput](#P-trifenix-connect-mdm-ts_model-PropertySearchInfo-HasInput 'trifenix.connect.mdm.ts_model.PropertySearchInfo.HasInput')
  - [Index](#P-trifenix-connect-mdm-ts_model-PropertySearchInfo-Index 'trifenix.connect.mdm.ts_model.PropertySearchInfo.Index')
  - [IndexClass](#P-trifenix-connect-mdm-ts_model-PropertySearchInfo-IndexClass 'trifenix.connect.mdm.ts_model.PropertySearchInfo.IndexClass')
  - [Info](#P-trifenix-connect-mdm-ts_model-PropertySearchInfo-Info 'trifenix.connect.mdm.ts_model.PropertySearchInfo.Info')
  - [IsEnumerable](#P-trifenix-connect-mdm-ts_model-PropertySearchInfo-IsEnumerable 'trifenix.connect.mdm.ts_model.PropertySearchInfo.IsEnumerable')
  - [IsRequired](#P-trifenix-connect-mdm-ts_model-PropertySearchInfo-IsRequired 'trifenix.connect.mdm.ts_model.PropertySearchInfo.IsRequired')
  - [IsUnique](#P-trifenix-connect-mdm-ts_model-PropertySearchInfo-IsUnique 'trifenix.connect.mdm.ts_model.PropertySearchInfo.IsUnique')
  - [MaxLength](#P-trifenix-connect-mdm-ts_model-PropertySearchInfo-MaxLength 'trifenix.connect.mdm.ts_model.PropertySearchInfo.MaxLength')
  - [MinLength](#P-trifenix-connect-mdm-ts_model-PropertySearchInfo-MinLength 'trifenix.connect.mdm.ts_model.PropertySearchInfo.MinLength')
  - [Name](#P-trifenix-connect-mdm-ts_model-PropertySearchInfo-Name 'trifenix.connect.mdm.ts_model.PropertySearchInfo.Name')
  - [Related](#P-trifenix-connect-mdm-ts_model-PropertySearchInfo-Related 'trifenix.connect.mdm.ts_model.PropertySearchInfo.Related')
  - [RelatedEntity](#P-trifenix-connect-mdm-ts_model-PropertySearchInfo-RelatedEntity 'trifenix.connect.mdm.ts_model.PropertySearchInfo.RelatedEntity')
  - [Visible](#P-trifenix-connect-mdm-ts_model-PropertySearchInfo-Visible 'trifenix.connect.mdm.ts_model.PropertySearchInfo.Visible')
- [ReferenceAttribute](#T-trifenix-connect-mdm-validation_attributes-ReferenceAttribute 'trifenix.connect.mdm.validation_attributes.ReferenceAttribute')
  - [#ctor(_entityOfReference)](#M-trifenix-connect-mdm-validation_attributes-ReferenceAttribute-#ctor-System-Type- 'trifenix.connect.mdm.validation_attributes.ReferenceAttribute.#ctor(System.Type)')
  - [entityOfReference](#F-trifenix-connect-mdm-validation_attributes-ReferenceAttribute-entityOfReference 'trifenix.connect.mdm.validation_attributes.ReferenceAttribute.entityOfReference')
- [UniqueAttribute](#T-trifenix-connect-mdm_attributes-UniqueAttribute 'trifenix.connect.mdm_attributes.UniqueAttribute')

<a name='T-trifenix-connect-mdm_attributes-AutoNumericDependantAttribute'></a>
## AutoNumericDependantAttribute `type`

##### Namespace

trifenix.connect.mdm_attributes

##### Summary

Atributo que determina que un campo es autonumérico

<a name='P-trifenix-connect-mdm_attributes-AutoNumericDependantAttribute-Dependant'></a>
### Dependant `property`

##### Summary

la autonumeneración puede depnder de otra entidad, para comenzar desde el principio,
por ejemplo, una dosis tendrá un autonumérico que depende de producto,
el producto 1, tendría  la dosis 1, 2 y 3
y el producto 2, tendría la dosis 1 y 2.

<a name='T-trifenix-connect-mdm_attributes-BaseIndexAttribute'></a>
## BaseIndexAttribute `type`

##### Namespace

trifenix.connect.mdm_attributes

<a name='P-trifenix-connect-mdm_attributes-BaseIndexAttribute-Index'></a>
### Index `property`

##### Summary

Índice de la propiedad.

<a name='P-trifenix-connect-mdm_attributes-BaseIndexAttribute-IsEntity'></a>
### IsEntity `property`

##### Summary

determina si la entidad es una entidad.

<a name='P-trifenix-connect-mdm_attributes-BaseIndexAttribute-KindIndex'></a>
### KindIndex `property`

##### Summary

índice del tipo de  propiedad
tendrá distintos indices si es entidad u propiedad.

<a name='P-trifenix-connect-mdm_attributes-BaseIndexAttribute-Visible'></a>
### Visible `property`

##### Summary

determina si la propiedad es visible.

<a name='T-trifenix-connect-mdm-entity_model-BoolBaseProperty'></a>
## BoolBaseProperty `type`

##### Namespace

trifenix.connect.mdm.entity_model

##### Summary

Implementación para tests.

<a name='T-trifenix-connect-mdm-ts_model-CollectionResult'></a>
## CollectionResult `type`

##### Namespace

trifenix.connect.mdm.ts_model

##### Summary

Resultado de una consulta de entidades.
Los valores incluidos + la consulta, permiten refrescar.

<a name='P-trifenix-connect-mdm-ts_model-CollectionResult-Current'></a>
### Current `property`

##### Summary

Generalmente una consulta está relacionado con una página.

<a name='P-trifenix-connect-mdm-ts_model-CollectionResult-Entities'></a>
### Entities `property`

##### Summary

Entidades que retorna

<a name='P-trifenix-connect-mdm-ts_model-CollectionResult-Facets'></a>
### Facets `property`

##### Summary

Agrupaciones de busqueda.

<a name='P-trifenix-connect-mdm-ts_model-CollectionResult-Filter'></a>
### Filter `property`

##### Summary

Filtros de la consulta

<a name='P-trifenix-connect-mdm-ts_model-CollectionResult-IndexPropDefaultName'></a>
### IndexPropDefaultName `property`

##### Summary

Indice de la propiedad que será usada,
por todas las entidades que estén relacionadas con la entidad principal.

<a name='P-trifenix-connect-mdm-ts_model-CollectionResult-IndexPropNames'></a>
### IndexPropNames `property`

##### Summary

En casos particulares de entidades que no usen la propiedad por defecto,
podrá asignar el índice de la entidad, y el o los índices de propiedad de tipo string

<a name='P-trifenix-connect-mdm-ts_model-CollectionResult-OrderItems'></a>
### OrderItems `property`

##### Summary

Listado de items para el ordenamiento

<a name='P-trifenix-connect-mdm-ts_model-CollectionResult-Total'></a>
### Total `property`

##### Summary

Total de registros

<a name='T-trifenix-connect-mdm-entity_model-DblBaseProperty'></a>
## DblBaseProperty `type`

##### Namespace

trifenix.connect.mdm.entity_model

##### Summary

implementación para typegen.

<a name='T-trifenix-connect-mdm-ts_model-props-DblProperty'></a>
## DblProperty `type`

##### Namespace

trifenix.connect.mdm.ts_model.props

##### Summary

implementación para typegen.

<a name='T-trifenix-connect-mdm-entity_model-EntityBaseSearch`1'></a>
## EntityBaseSearch\`1 `type`

##### Namespace

trifenix.connect.mdm.entity_model

##### Summary

Clase generada automáticamente desde una entidad de base de datos o cualquier clase.
Un entitySearch es una estructura diseñada para las busquedas.

##### Generic Types

| Name | Description |
| ---- | ----------- |
| T | Tipo de dato Geo |

<a name='P-trifenix-connect-mdm-entity_model-EntityBaseSearch`1-bl'></a>
### bl `property`

##### Summary

Todas las propiedades booleanas, quedarán en esta colección.

<a name='P-trifenix-connect-mdm-entity_model-EntityBaseSearch`1-created'></a>
### created `property`

##### Summary

Fecha de creación del elemento.

<a name='P-trifenix-connect-mdm-entity_model-EntityBaseSearch`1-dbl'></a>
### dbl `property`

##### Summary

Colección de propiedades de tipo double

<a name='P-trifenix-connect-mdm-entity_model-EntityBaseSearch`1-dt'></a>
### dt `property`

##### Summary

colección de propiedades de tipo fecha.

<a name='P-trifenix-connect-mdm-entity_model-EntityBaseSearch`1-enm'></a>
### enm `property`

##### Summary

Colección de propiedades de tipo enumeración.

<a name='P-trifenix-connect-mdm-entity_model-EntityBaseSearch`1-geo'></a>
### geo `property`

##### Summary

Colección de propiedades de tipo geo,
el tipo Geo esta determinado por el tipo que se asigne al objeto.

<a name='P-trifenix-connect-mdm-entity_model-EntityBaseSearch`1-id'></a>
### id `property`

##### Summary

identificador de un entitySearch

<a name='P-trifenix-connect-mdm-entity_model-EntityBaseSearch`1-index'></a>
### index `property`

##### Summary

índice de la entidad, la que identifica como elemento.
un índice viene de un diccionario que enlaza con la clase que corresponda
a través de atributos.

<a name='P-trifenix-connect-mdm-entity_model-EntityBaseSearch`1-num32'></a>
### num32 `property`

##### Summary

Colección de propiedades de tipo num32.

<a name='P-trifenix-connect-mdm-entity_model-EntityBaseSearch`1-num64'></a>
### num64 `property`

##### Summary

Colección de propiedades de tipo num64.

<a name='P-trifenix-connect-mdm-entity_model-EntityBaseSearch`1-rel'></a>
### rel `property`

##### Summary

Colección de propiedades de tipo relación.

<a name='P-trifenix-connect-mdm-entity_model-EntityBaseSearch`1-str'></a>
### str `property`

##### Summary

Colección de propiedades de tipo string.

<a name='P-trifenix-connect-mdm-entity_model-EntityBaseSearch`1-sug'></a>
### sug `property`

##### Summary

Colección de propiedades de tipo suggest.

<a name='T-trifenix-connect-mdm_attributes-EntityGroupMenuAttribute'></a>
## EntityGroupMenuAttribute `type`

##### Namespace

trifenix.connect.mdm_attributes

##### Summary

indica si una clase es agrupada para construir un menú.

<a name='T-trifenix-connect-mdm_attributes-EntityIndexAttribute'></a>
## EntityIndexAttribute `type`

##### Namespace

trifenix.connect.mdm_attributes

##### Summary

Determina el pathname que será usado en la clase y
el tipo de entidad.

<a name='P-trifenix-connect-mdm_attributes-EntityIndexAttribute-Kind'></a>
### Kind `property`

##### Summary

Determina el tipo de entidad.
Si es de tipo entity, significa que es lo suficientemente simple para generar su formulario
de manera automática,
si es de´tipo proceso, se identificará como documento o proceso.
y si es custom, se entenderá que puede no ser un proceso, pero debe ser construido manualmente.

<a name='P-trifenix-connect-mdm_attributes-EntityIndexAttribute-PathName'></a>
### PathName `property`

##### Summary

determina un pathname que puede ser usado en el router del cliente
o en la url de la api rest.

<a name='T-trifenix-connect-mdm_attributes-EntityIndexRelatedPropertyAttribute'></a>
## EntityIndexRelatedPropertyAttribute `type`

##### Namespace

trifenix.connect.mdm_attributes

##### Summary

Atributo que identifica una propiedad con una entidad relacionada.

<a name='M-trifenix-connect-mdm_attributes-EntityIndexRelatedPropertyAttribute-#ctor'></a>
### #ctor() `constructor`

##### Summary

declara la clase base como entidad,
 la clase padre es usada para identificar todas las propiedades.
 de entidad o de el resto de tipo de datos.

##### Parameters

This constructor has no parameters.

<a name='P-trifenix-connect-mdm_attributes-EntityIndexRelatedPropertyAttribute-Bypass'></a>
### Bypass `property`

##### Summary

Se usa exclusivamente cuando una entidad apunto a otra entidad en más de una propiedad.
el modelo no puede soportar dos propiedades que apuntan a la misma entidad.
cuando se da el caso, se debe crear un bypass, por ejemplo.
Un cuartel apunta a variedad, a través de la propiedad variedad, pero también en polinizador.
el modelo mdm cuando detecta que existen varias propiedades que apuntan a la misma entidad
los agrupa y los lleva como un array de entidades relacionadas, con el índice y su valor, no diferenciando que sean propiedades distintas.
Para poder lograr que esto no pase, en vez de usar el índice de variedad, se usa el índice de otra clase, en este caso polinizador.
declarandolo como una referencia hacia Variedades, la clase polinizador puede ser vacia.
Siempre que se consulte sobre polinizador se sabrá que es solo una referencia
y se apuntará al que corresponde realmente.
!Importante, esto no afecta el modelo de clases, el modelo de clases se mantiene igual, solo se debe considerar a nivel de los atributos MDM
y crear una clase que haga la referencia, como en el ejemplo Polinator.

<a name='T-trifenix-connect-mdm-enums-EntityKind'></a>
## EntityKind `type`

##### Namespace

trifenix.connect.mdm.enums

##### Summary

Determina el tipo de entidad,
esto permitirá saber que entidades siguen un patrón común por
tanto son mayormente susceptibles para ser automatizadas, como es el caso
de Entity

<a name='T-trifenix-connect-mdm-ts_model-EntityMetadata'></a>
## EntityMetadata `type`

##### Namespace

trifenix.connect.mdm.ts_model

##### Summary

Metadata de una entidad o clase.

<a name='P-trifenix-connect-mdm-ts_model-EntityMetadata-AutoNumeric'></a>
### AutoNumeric `property`

##### Summary

Autonumérico

<a name='P-trifenix-connect-mdm-ts_model-EntityMetadata-BoolData'></a>
### BoolData `property`

##### Summary

Metada de las propiedades de tipo boolean

<a name='P-trifenix-connect-mdm-ts_model-EntityMetadata-ClassName'></a>
### ClassName `property`

##### Summary

Nombre de la clase

<a name='P-trifenix-connect-mdm-ts_model-EntityMetadata-DateData'></a>
### DateData `property`

##### Summary

Metadata de las propiedades de tipo fecha.

<a name='P-trifenix-connect-mdm-ts_model-EntityMetadata-Description'></a>
### Description `property`

##### Summary

Descripción de la entidad

<a name='P-trifenix-connect-mdm-ts_model-EntityMetadata-DoubleData'></a>
### DoubleData `property`

##### Summary

Metadata de las propiedades de tipo double.

<a name='P-trifenix-connect-mdm-ts_model-EntityMetadata-EntityKind'></a>
### EntityKind `property`

##### Summary

Tipo de entidad, si es de tipo entity, se podría indicar que es común,
por tanto puede ser generada automáticamente.

<a name='P-trifenix-connect-mdm-ts_model-EntityMetadata-EnumData'></a>
### EnumData `property`

##### Summary

propiedades de tipo enumeración.

<a name='P-trifenix-connect-mdm-ts_model-EntityMetadata-GeoData'></a>
### GeoData `property`

##### Summary

Metadata de las propiedades de tipo geo.

<a name='P-trifenix-connect-mdm-ts_model-EntityMetadata-Index'></a>
### Index `property`

##### Summary

Índice de la entidad

<a name='P-trifenix-connect-mdm-ts_model-EntityMetadata-NumData'></a>
### NumData `property`

##### Summary

Metadata de las propiedades de tipo número.

<a name='P-trifenix-connect-mdm-ts_model-EntityMetadata-PathName'></a>
### PathName `property`

##### Summary

cadena de texto para la ruta de la entidad,
esto puede ser usado para el react router
o las rutas de la api.

<a name='P-trifenix-connect-mdm-ts_model-EntityMetadata-ShortName'></a>
### ShortName `property`

##### Summary

Nombre Corto de la entidad

<a name='P-trifenix-connect-mdm-ts_model-EntityMetadata-StringData'></a>
### StringData `property`

##### Summary

Metadata de las propiedades de tipo string

<a name='P-trifenix-connect-mdm-ts_model-EntityMetadata-Title'></a>
### Title `property`

##### Summary

Nombre de la entidad a mostrar

<a name='P-trifenix-connect-mdm-ts_model-EntityMetadata-Visible'></a>
### Visible `property`

##### Summary

Determina si la clase es visible

<a name='P-trifenix-connect-mdm-ts_model-EntityMetadata-relData'></a>
### relData `property`

##### Summary

propiedades de tipo entidad.

<a name='T-trifenix-connect-mdm-ts_model-EntitySearchDisplayInfo'></a>
## EntitySearchDisplayInfo `type`

##### Namespace

trifenix.connect.mdm.ts_model

##### Summary

Descripción de una propiedad.

<a name='P-trifenix-connect-mdm-ts_model-EntitySearchDisplayInfo-Column'></a>
### Column `property`

##### Summary

Valor de Columna

<a name='P-trifenix-connect-mdm-ts_model-EntitySearchDisplayInfo-Description'></a>
### Description `property`

##### Summary

Descripción

<a name='P-trifenix-connect-mdm-ts_model-EntitySearchDisplayInfo-ShortName'></a>
### ShortName `property`

##### Summary

Nombre Resumen

<a name='P-trifenix-connect-mdm-ts_model-EntitySearchDisplayInfo-Title'></a>
### Title `property`

##### Summary

Título

<a name='T-trifenix-connect-mdm-containers-ExtGetContainer`1'></a>
## ExtGetContainer\`1 `type`

##### Namespace

trifenix.connect.mdm.containers

##### Summary

Contenedor para respuestas get

##### Generic Types

| Name | Description |
| ---- | ----------- |
| T | Tipo de elemento a recuperar |

<a name='P-trifenix-connect-mdm-containers-ExtGetContainer`1-ErrorMessage'></a>
### ErrorMessage `property`

##### Summary

mensaje de error, si existe.

<a name='P-trifenix-connect-mdm-containers-ExtGetContainer`1-Result'></a>
### Result `property`

##### Summary

Elemento a recuperar

<a name='P-trifenix-connect-mdm-containers-ExtGetContainer`1-StatusResult'></a>
### StatusResult `property`

##### Summary

Status del resultado
Error, Success o emptyResults

<a name='T-trifenix-connect-mdm-enums-ExtGetDataResult'></a>
## ExtGetDataResult `type`

##### Namespace

trifenix.connect.mdm.enums

##### Summary

Resultado de una consulta get.

<a name='T-trifenix-connect-mdm-containers-ExtGetErrorContainer`1'></a>
## ExtGetErrorContainer\`1 `type`

##### Namespace

trifenix.connect.mdm.containers

##### Summary

Contenedor para respuestas Get cuando retorna un error

##### Generic Types

| Name | Description |
| ---- | ----------- |
| T | Tipo de Elemento a recuperar |

<a name='P-trifenix-connect-mdm-containers-ExtGetErrorContainer`1-GetBase'></a>
### GetBase `property`

##### Summary

Obtiene el error que debe mostrar al usuario final, es decir la misma, pero sin la excepción interna.

<a name='P-trifenix-connect-mdm-containers-ExtGetErrorContainer`1-InternalException'></a>
### InternalException `property`

##### Summary

Excepción capturada.

<a name='T-trifenix-connect-mdm-enums-ExtMessageResult'></a>
## ExtMessageResult `type`

##### Namespace

trifenix.connect.mdm.enums

##### Summary

Tipo de resultado al momento de insertar un elemento.

<a name='T-trifenix-connect-mdm-containers-ExtPostContainer`1'></a>
## ExtPostContainer\`1 `type`

##### Namespace

trifenix.connect.mdm.containers

##### Summary

Envía de regreso las operaciones de tipo Post.

##### Generic Types

| Name | Description |
| ---- | ----------- |
| T | Tipo de Resultado |

<a name='P-trifenix-connect-mdm-containers-ExtPostContainer`1-IdRelated'></a>
### IdRelated `property`

##### Summary

Identificador del elemento relacionado en el post

<a name='P-trifenix-connect-mdm-containers-ExtPostContainer`1-Message'></a>
### Message `property`

##### Summary

Mensaje de error si existiese

<a name='P-trifenix-connect-mdm-containers-ExtPostContainer`1-MessageResult'></a>
### MessageResult `property`

##### Summary

Mensaje con el resultado

<a name='P-trifenix-connect-mdm-containers-ExtPostContainer`1-Result'></a>
### Result `property`

##### Summary

Resultado del envío.

<a name='T-trifenix-connect-mdm-containers-ExtPostErrorContainer`1'></a>
## ExtPostErrorContainer\`1 `type`

##### Namespace

trifenix.connect.mdm.containers

##### Summary

Envia un Contenedor con detalles del error

##### Generic Types

| Name | Description |
| ---- | ----------- |
| T | Tipo de resultado que debería envíar |

<a name='F-trifenix-connect-mdm-containers-ExtPostErrorContainer`1-_validationMessages'></a>
### _validationMessages `constants`

##### Summary

Mensajes de validación.

<a name='P-trifenix-connect-mdm-containers-ExtPostErrorContainer`1-GetBase'></a>
### GetBase `property`

##### Summary

ExtPostContainer con los campos de este tipo

<a name='P-trifenix-connect-mdm-containers-ExtPostErrorContainer`1-InternalException'></a>
### InternalException `property`

##### Summary

Excepción encontrada.

<a name='P-trifenix-connect-mdm-containers-ExtPostErrorContainer`1-ValidationMessages'></a>
### ValidationMessages `property`

##### Summary

Mensajes de Validación o mas bien de error.

<a name='T-trifenix-connect-mdm-ts_model-Facet'></a>
## Facet `type`

##### Namespace

trifenix.connect.mdm.ts_model

##### Summary

Facet, o agrupación de busqueda, es un groupby por categoria inserto en una busqueda.

<a name='P-trifenix-connect-mdm-ts_model-Facet-Count'></a>
### Count `property`

##### Summary

Número de elementos encontrados, por cada tipo de count.

<a name='P-trifenix-connect-mdm-ts_model-Facet-Index'></a>
### Index `property`

##### Summary

índice de la entidad del facet.

<a name='P-trifenix-connect-mdm-ts_model-Facet-Title'></a>
### Title `property`

##### Summary

Título del facet, este valor se va a buscar con el valor.
el titulo se determina con el indice de la propiedad que representaria el nombre de la entidad

<a name='P-trifenix-connect-mdm-ts_model-Facet-Value'></a>
### Value `property`

##### Summary

valor del facet, normalmente el identificador de una entidad.

<a name='T-trifenix-connect-mdm-ts_model-FilterBase`1'></a>
## FilterBase\`1 `type`

##### Namespace

trifenix.connect.mdm.ts_model

##### Summary

Filtro para cada tipo de valor.

##### Generic Types

| Name | Description |
| ---- | ----------- |
| T |  |

<a name='P-trifenix-connect-mdm-ts_model-FilterBase`1-FilterType'></a>
### FilterType `property`

##### Summary

Tipo de filtro

<a name='P-trifenix-connect-mdm-ts_model-FilterBase`1-Value'></a>
### Value `property`

##### Summary

valor a filtrar

<a name='T-trifenix-connect-mdm-ts_model-FilterGlobalEntityInput'></a>
## FilterGlobalEntityInput `type`

##### Namespace

trifenix.connect.mdm.ts_model

##### Summary

Filtro global seleccionado, contenedor de filtro global, en una aplicación antes de hacer consultas se preguntará por los filtros globales.
un filtro global tendrá un índice principal que será el tipo de entidad que será filtrada.
por tanto, en el cliente debería existir una selección, que consultará por todos los elementos del tipo de entidad.
los resultados seleccionados serán guardados en EntitiesSelected.
Se pueden definir también filtros que dependan del filtro padre.
esto significa que el resultado seleccionado, servirá para filtrar los filtros hijos.
por ejemplo:
en el caso de un programa agricola existirá el filtro de centro de costos, el que determinará la empresa con la que operará el programa
no todas las entidades tendrán directamente el centro de costos como relación, existirán algunas que dependerán de otra entidad para hacer la conexión.
un filtro global debe considerar el centro de costos y todas las entidades que permitan filtrar todos los elementos del sitio a partir de esta selección.

<a name='P-trifenix-connect-mdm-ts_model-FilterGlobalEntityInput-EntitiesSelected'></a>
### EntitiesSelected `property`

##### Summary

Identificador de los elementos seleccionados si es el padre y los ids que dependen del filtro principal para el hijo.

<a name='P-trifenix-connect-mdm-ts_model-FilterGlobalEntityInput-FilterChilds'></a>
### FilterChilds `property`

##### Summary

Filtro global Recursivo, si existen propiedades que dependan
del filtro principal, por ejemplo si un filtro global fuera el año agricola,
no todas las consultas tendran acceso a la entidad season directamente.
por tanto puede incluir en este contenedor, todos los filtros que dependan del principal.

<a name='P-trifenix-connect-mdm-ts_model-FilterGlobalEntityInput-indexMain'></a>
### indexMain `property`

##### Summary

Indice de una entidad a filtrar

<a name='T-trifenix-connect-mdm-ts_model-FilterModel'></a>
## FilterModel `type`

##### Namespace

trifenix.connect.mdm.ts_model

##### Summary

Colección de filtros que aplican a una consulta

<a name='P-trifenix-connect-mdm-ts_model-FilterModel-BoolFilters'></a>
### BoolFilters `property`

##### Summary

filtro de tipo bool

<a name='P-trifenix-connect-mdm-ts_model-FilterModel-DateFilters'></a>
### DateFilters `property`

##### Summary

filtro de tipo date

<a name='P-trifenix-connect-mdm-ts_model-FilterModel-DoubleFilters'></a>
### DoubleFilters `property`

##### Summary

filtro de tipo double.

<a name='P-trifenix-connect-mdm-ts_model-FilterModel-EnumFilter'></a>
### EnumFilter `property`

##### Summary

fitro de tipo enumeración.

<a name='P-trifenix-connect-mdm-ts_model-FilterModel-FilterEntity'></a>
### FilterEntity `property`

##### Summary

filtro de tipo entidad

<a name='P-trifenix-connect-mdm-ts_model-FilterModel-FilterStr'></a>
### FilterStr `property`

##### Summary

Filtro de tipo string
grupo de filtros agrupados por indice de cada propiedad a filtrar.

<a name='P-trifenix-connect-mdm-ts_model-FilterModel-LongFilter'></a>
### LongFilter `property`

##### Summary

filtro de tipo long.

<a name='P-trifenix-connect-mdm-ts_model-FilterModel-NumFilter'></a>
### NumFilter `property`

##### Summary

filtro de tipo número.

<a name='T-trifenix-connect-mdm-ts_model-GeoPointTs'></a>
## GeoPointTs `type`

##### Namespace

trifenix.connect.mdm.ts_model

##### Summary

Tipo de dato para geolocalización que será usado en el cliente.

<a name='P-trifenix-connect-mdm-ts_model-GeoPointTs-latitude'></a>
### latitude `property`

##### Summary

latitud

<a name='P-trifenix-connect-mdm-ts_model-GeoPointTs-longitude'></a>
### longitude `property`

##### Summary

longitud

<a name='T-trifenix-connect-mdm-ts_model-GeographyProperty'></a>
## GeographyProperty `type`

##### Namespace

trifenix.connect.mdm.ts_model

##### Summary

Clase de tipo geo, que será generada como componente typescript
para identificar un campo de tipo geo.

<a name='P-trifenix-connect-mdm-ts_model-GeographyProperty-index'></a>
### index `property`

##### Summary

índice de la propiedad de tipo geo

<a name='P-trifenix-connect-mdm-ts_model-GeographyProperty-value'></a>
### value `property`

##### Summary

valor de la propiedad de tipo geo.

<a name='T-trifenix-connect-mdm_attributes-GroupAttribute'></a>
## GroupAttribute `type`

##### Namespace

trifenix.connect.mdm_attributes

##### Summary

Determina una agrupación de propiedades, con el fin de definir en la metadata la estructura de un formulario.

<a name='T-trifenix-connect-mdm-ts_model-GroupInput'></a>
## GroupInput `type`

##### Namespace

trifenix.connect.mdm.ts_model

##### Summary

Agrupación de propiedades, usadas en el cliente

<a name='P-trifenix-connect-mdm-ts_model-GroupInput-ColumnProportion'></a>
### ColumnProportion `property`

##### Summary

Proporción de columna, usada para determinar su posición.
se usa en base 12, es decir 12 es el ancho total.

<a name='P-trifenix-connect-mdm-ts_model-GroupInput-Device'></a>
### Device `property`

##### Summary

Tipo de Dispositivo

<a name='P-trifenix-connect-mdm-ts_model-GroupInput-OrderIndex'></a>
### OrderIndex `property`

##### Summary

índice usado para ordenar los grupos de propiedades

<a name='P-trifenix-connect-mdm-ts_model-GroupInput-Title'></a>
### Title `property`

##### Summary

título del grupo, puede ser vacio.

<a name='T-trifenix-connect-mdm-ts_model-GroupMenu'></a>
## GroupMenu `type`

##### Namespace

trifenix.connect.mdm.ts_model

##### Summary

Generación de menús en base a entidades.
se identifica un menú con un identificador y se determina el dispositivo.

<a name='P-trifenix-connect-mdm-ts_model-GroupMenu-Device'></a>
### Device `property`

##### Summary

Tipo de dispositivo donde se aplicaría el menú.

<a name='P-trifenix-connect-mdm-ts_model-GroupMenu-MenuIndex'></a>
### MenuIndex `property`

##### Summary

índice que corresponde al menú.

<a name='P-trifenix-connect-mdm-ts_model-GroupMenu-SubMenuIndex'></a>
### SubMenuIndex `property`

##### Summary

índice que identifica un submenú.

<a name='T-trifenix-connect-mdm-entity_model-IBoolProperty'></a>
## IBoolProperty `type`

##### Namespace

trifenix.connect.mdm.entity_model

##### Summary

Una propiedad booleana

<a name='T-trifenix-connect-mdm-entity_model-IDblProperty'></a>
## IDblProperty `type`

##### Namespace

trifenix.connect.mdm.entity_model

##### Summary

una propiedad double

<a name='T-trifenix-connect-mdm-entity_model-IDtProperty'></a>
## IDtProperty `type`

##### Namespace

trifenix.connect.mdm.entity_model

##### Summary

una propiedad de tipo fecha

<a name='T-trifenix-connect-mdm-entity_model-IEntitySearch`1'></a>
## IEntitySearch\`1 `type`

##### Namespace

trifenix.connect.mdm.entity_model

##### Summary

Entidad base de fenix-mdm
esta estructura permite guardar todas las entidades en agrupaciones por tipo de dato.
el objetivo es generar este tipo de entidades desde el modelo de clases y viceversa,
Puedo generar un entity search desde cualquier tabla o clase, la diferencia es que para poder convertir desde
el entity search, necesito la metadata, es decir, el diccionario que relaciona los índices de este modelo con los nombres
de clases y propiedades.
Este modelo permite a componentes webs, móviles o desktop realizar consultas a este modelo,
pudiendo generar una sólida arquitectura de componentes.
el tipo de datos corresponde al tipo geo, que dependerá de la base de datos.
`T`

<a name='P-trifenix-connect-mdm-entity_model-IEntitySearch`1-bl'></a>
### bl `property`

##### Summary

diccionario de valores de tipo booleano.

<a name='P-trifenix-connect-mdm-entity_model-IEntitySearch`1-created'></a>
### created `property`

##### Summary

Fecha de creación del elemento

<a name='P-trifenix-connect-mdm-entity_model-IEntitySearch`1-dbl'></a>
### dbl `property`

##### Summary

diccionario de valores de tipo double.

<a name='P-trifenix-connect-mdm-entity_model-IEntitySearch`1-dt'></a>
### dt `property`

##### Summary

diccionario de valor de tipo date

<a name='P-trifenix-connect-mdm-entity_model-IEntitySearch`1-enm'></a>
### enm `property`

##### Summary

diccionario de valores de tipo enum.

<a name='P-trifenix-connect-mdm-entity_model-IEntitySearch`1-geo'></a>
### geo `property`

##### Summary

Identifica una propiedad de tipo geo, la cual podrá determinar la ubicación geográfica de un elemento
El tipo será según el motor de busqueda.

<a name='P-trifenix-connect-mdm-entity_model-IEntitySearch`1-hh'></a>
### hh `property`

##### Summary

hash de la cabecera.

<a name='P-trifenix-connect-mdm-entity_model-IEntitySearch`1-hm'></a>
### hm `property`

##### Summary

hash de la base de datos que representa el modelo.

<a name='P-trifenix-connect-mdm-entity_model-IEntitySearch`1-id'></a>
### id `property`

##### Summary

Identificador único de cualquier entidad del modelo, generalmente un guid.

<a name='P-trifenix-connect-mdm-entity_model-IEntitySearch`1-index'></a>
### index `property`

##### Summary

El índice que identifica la entidad, por ejemplo 1 = Persona.

<a name='P-trifenix-connect-mdm-entity_model-IEntitySearch`1-num32'></a>
### num32 `property`

##### Summary

diccionario de valores de tipo número

<a name='P-trifenix-connect-mdm-entity_model-IEntitySearch`1-num64'></a>
### num64 `property`

##### Summary

diccionario de valores de tipo long

<a name='P-trifenix-connect-mdm-entity_model-IEntitySearch`1-rel'></a>
### rel `property`

##### Summary

diccionario de valores de tipo relación
en elemento se podrá relacionar 1 a 1 o 1 a muchos a través de esta propiedad.

<a name='P-trifenix-connect-mdm-entity_model-IEntitySearch`1-str'></a>
### str `property`

##### Summary

diccionario de valores tipo string.

<a name='P-trifenix-connect-mdm-entity_model-IEntitySearch`1-sug'></a>
### sug `property`

##### Summary

diccionario de valores de tipo string que serán usados para autocompletar o sugerencias mientras busca.

<a name='T-trifenix-connect-mdm-entity_model-IEnumProperty'></a>
## IEnumProperty `type`

##### Namespace

trifenix.connect.mdm.entity_model

##### Summary

una propiedad de tipo enumeración.

<a name='T-trifenix-connect-mdm-entity_model-INum32Property'></a>
## INum32Property `type`

##### Namespace

trifenix.connect.mdm.entity_model

##### Summary

una propiedad de tipo entero

<a name='T-trifenix-connect-mdm-entity_model-INum64Property'></a>
## INum64Property `type`

##### Namespace

trifenix.connect.mdm.entity_model

##### Summary

una propiedad de tipo long

<a name='T-trifenix-connect-mdm-entity_model-IPropertyBaseFaceTable`1'></a>
## IPropertyBaseFaceTable\`1 `type`

##### Namespace

trifenix.connect.mdm.entity_model

##### Summary

Enum, Fecha y entidades tienen facetable para agrupar resultados.

##### Generic Types

| Name | Description |
| ---- | ----------- |
| T |  |

<a name='T-trifenix-connect-mdm-entity_model-IPropertyFaceTable'></a>
## IPropertyFaceTable `type`

##### Namespace

trifenix.connect.mdm.entity_model

##### Summary

Interfaz para entidades que implementen un facet de busqueda.

<a name='P-trifenix-connect-mdm-entity_model-IPropertyFaceTable-facet'></a>
### facet `property`

##### Summary

facet de la entidad.
el facet se genera desde el index y el id, quedando = index,id
por ejemplo,
si registramos una nueva  camara con marca canon, registrariamos la marca en esta entidad indicandole el índice que
corresponda a la marca en el diccionario, el id de la entidad (guid)
y el facet que sería el index,guid
registrariamos esta campo como

```
{
   index: 3,
   id : "[guid]",
   facet : "3,[guid]"
}
```

cuando hagamos consultas traerá las agrupaciones que encuentre en base al índice y el guid,
permitiendo agrupar por entidad e identificador de esa entidad.
por ejemplo,
\`\`\`
3 => El índice que corresponde a la marca
[guid] => un guid correspondería a una entidad de tipo marca, como Canon.
\`\`\`

<a name='T-trifenix-connect-mdm-entity_model-IProperty`1'></a>
## IProperty\`1 `type`

##### Namespace

trifenix.connect.mdm.entity_model

##### Summary

Interface base para todas las propiedades en el que se especifica el índice y el valor.

##### Generic Types

| Name | Description |
| ---- | ----------- |
| T | Tipo de Valor (bool, string, int, long, double, datetime) |

<a name='P-trifenix-connect-mdm-entity_model-IProperty`1-index'></a>
### index `property`

##### Summary

Índice de una propiedad

<a name='P-trifenix-connect-mdm-entity_model-IProperty`1-value'></a>
### value `property`

##### Summary

Valor de una entidad

<a name='T-trifenix-connect-mdm-entity_model-IRelatedId'></a>
## IRelatedId `type`

##### Namespace

trifenix.connect.mdm.entity_model

##### Summary

Interface que representa una entidad dentro de un entitySearch

<a name='P-trifenix-connect-mdm-entity_model-IRelatedId-id'></a>
### id `property`

##### Summary

identificador de la entidad

<a name='P-trifenix-connect-mdm-entity_model-IRelatedId-index'></a>
### index `property`

##### Summary

índice de la entidad

<a name='T-trifenix-connect-mdm-entity_model-IStrProperty'></a>
## IStrProperty `type`

##### Namespace

trifenix.connect.mdm.entity_model

##### Summary

propiedad string.

<a name='T-trifenix-connect-mdm-enums-KindEntityProperty'></a>
## KindEntityProperty `type`

##### Namespace

trifenix.connect.mdm.enums

##### Summary

Determina si una entidad es local, es decir no tiene key value en una base de datos documental
o es de referencia, por lo tanto, si tiene un key value en una base documental.

<a name='T-trifenix-connect-mdm-enums-KindProperty'></a>
## KindProperty `type`

##### Namespace

trifenix.connect.mdm.enums

##### Summary

Tipos de propiedades soportadas por el modelo.

<a name='T-trifenix-connect-mdm-ts_model-ModelMetaData'></a>
## ModelMetaData `type`

##### Namespace

trifenix.connect.mdm.ts_model

##### Summary

Metadata completo del modelo.

<a name='P-trifenix-connect-mdm-ts_model-ModelMetaData-Indexes'></a>
### Indexes `property`

##### Summary

Coleccion de metadata de cada entidad del modelo

<a name='T-trifenix-connect-mdm-ts_model-OrderItem'></a>
## OrderItem `type`

##### Namespace

trifenix.connect.mdm.ts_model

##### Summary

Item de Ordernamiento, permite ordenar una consulta.

<a name='P-trifenix-connect-mdm-ts_model-OrderItem-Desc'></a>
### Desc `property`

##### Summary

Ascendente o descendente.

<a name='P-trifenix-connect-mdm-ts_model-OrderItem-KindProperty'></a>
### KindProperty `property`

##### Summary

Tipo de propiedad

<a name='P-trifenix-connect-mdm-ts_model-OrderItem-PropertyIndex'></a>
### PropertyIndex `property`

##### Summary

Indice de la propiedad

<a name='T-trifenix-connect-mdm-enums-PhisicalDevice'></a>
## PhisicalDevice `type`

##### Namespace

trifenix.connect.mdm.enums

##### Summary

determina para quién aplicará la metadata.

<a name='T-trifenix-connect-mdm_attributes-PropertyIndexAttribute'></a>
## PropertyIndexAttribute `type`

##### Namespace

trifenix.connect.mdm_attributes

##### Summary

Propiedad que permite identificar de que tipo es una propiedad

<a name='M-trifenix-connect-mdm_attributes-PropertyIndexAttribute-#ctor'></a>
### #ctor() `constructor`

##### Summary

declara la clase base como no entidad,
la clase padre es usada para identificar todas las propiedades.
de entidad o de el resto de tipo de datos.

##### Parameters

This constructor has no parameters.

<a name='P-trifenix-connect-mdm_attributes-PropertyIndexAttribute-Related'></a>
### Related `property`

##### Summary

asigna el tipo de propiedad al elemento padre.

<a name='T-trifenix-connect-mdm-ts_model-PropertyMetadadataEnum'></a>
## PropertyMetadadataEnum `type`

##### Namespace

trifenix.connect.mdm.ts_model

##### Summary

Metadata de una propiedad de tipo enumeración,
esta hereda de la metadata de las otras entidades.

<a name='P-trifenix-connect-mdm-ts_model-PropertyMetadadataEnum-EnumData'></a>
### EnumData `property`

##### Summary

Descripción de cada valor del metadata.

<a name='T-trifenix-connect-mdm-ts_model-PropertyMetadata'></a>
## PropertyMetadata `type`

##### Namespace

trifenix.connect.mdm.ts_model

##### Summary

Metadata de una propiedad.

<a name='P-trifenix-connect-mdm-ts_model-PropertyMetadata-AutoNumeric'></a>
### AutoNumeric `property`

##### Summary

Determina si la propiedad es autonumeríca.

<a name='P-trifenix-connect-mdm-ts_model-PropertyMetadata-HasInput'></a>
### HasInput `property`

##### Summary

Si la propiedad tiene una entrada (las clases de tipo entrada estan conectadas porl el ReferenceSearchHeader)

<a name='P-trifenix-connect-mdm-ts_model-PropertyMetadata-Info'></a>
### Info `property`

##### Summary

Metadata para ser usada por el html.

<a name='P-trifenix-connect-mdm-ts_model-PropertyMetadata-NameProp'></a>
### NameProp `property`

##### Summary

Nombre de la propiedad

<a name='P-trifenix-connect-mdm-ts_model-PropertyMetadata-Required'></a>
### Required `property`

##### Summary

Determina si la propiedad es requerida.

<a name='P-trifenix-connect-mdm-ts_model-PropertyMetadata-Unique'></a>
### Unique `property`

##### Summary

Determina si la propiedad es única,
si lo es, solo puede existir solo una propiedad con ese nombre en la colección de entidades.

<a name='P-trifenix-connect-mdm-ts_model-PropertyMetadata-Visible'></a>
### Visible `property`

##### Summary

Determina si la propiedad es visible en un formulario.

<a name='P-trifenix-connect-mdm-ts_model-PropertyMetadata-isArray'></a>
### isArray `property`

##### Summary

determina si es o no un array.

<a name='T-trifenix-connect-mdm-ts_model-PropertySearchInfo'></a>
## PropertySearchInfo `type`

##### Namespace

trifenix.connect.mdm.ts_model

##### Summary

Información de una propiedad

<a name='P-trifenix-connect-mdm-ts_model-PropertySearchInfo-AutoNumeric'></a>
### AutoNumeric `property`

##### Summary

Si es un autonumérico.

<a name='P-trifenix-connect-mdm-ts_model-PropertySearchInfo-Enums'></a>
### Enums `property`

##### Summary

Valores de una enumeración, el número y la descripción.

<a name='P-trifenix-connect-mdm-ts_model-PropertySearchInfo-Group'></a>
### Group `property`

##### Summary

Grupo al que pertenece.

<a name='P-trifenix-connect-mdm-ts_model-PropertySearchInfo-HasInput'></a>
### HasInput `property`

##### Summary

Determina si tiene entrada (Existe una clase con esa propiedad en el namespace de entradas).

<a name='P-trifenix-connect-mdm-ts_model-PropertySearchInfo-Index'></a>
### Index `property`

##### Summary

Índice de la propiedad.

<a name='P-trifenix-connect-mdm-ts_model-PropertySearchInfo-IndexClass'></a>
### IndexClass `property`

##### Summary

índice de la clase a la que pertenece la propiedad.

<a name='P-trifenix-connect-mdm-ts_model-PropertySearchInfo-Info'></a>
### Info `property`

##### Summary

descripción de la propiedad

<a name='P-trifenix-connect-mdm-ts_model-PropertySearchInfo-IsEnumerable'></a>
### IsEnumerable `property`

##### Summary

índica si es un enumerable o no.

<a name='P-trifenix-connect-mdm-ts_model-PropertySearchInfo-IsRequired'></a>
### IsRequired `property`

##### Summary

Es requerido.

<a name='P-trifenix-connect-mdm-ts_model-PropertySearchInfo-IsUnique'></a>
### IsUnique `property`

##### Summary

Es único.

<a name='P-trifenix-connect-mdm-ts_model-PropertySearchInfo-MaxLength'></a>
### MaxLength `property`

##### Summary

Ancho máximo de la propiedad.

<a name='P-trifenix-connect-mdm-ts_model-PropertySearchInfo-MinLength'></a>
### MinLength `property`

##### Summary

Ancho Mínimo de la propiedad.

<a name='P-trifenix-connect-mdm-ts_model-PropertySearchInfo-Name'></a>
### Name `property`

##### Summary

Nombre de la propiedad

<a name='P-trifenix-connect-mdm-ts_model-PropertySearchInfo-Related'></a>
### Related `property`

##### Summary

tipo de propiedad.

<a name='P-trifenix-connect-mdm-ts_model-PropertySearchInfo-RelatedEntity'></a>
### RelatedEntity `property`

##### Summary

tipo de propiedad.

<a name='P-trifenix-connect-mdm-ts_model-PropertySearchInfo-Visible'></a>
### Visible `property`

##### Summary

Si la propiedad es visible.

<a name='T-trifenix-connect-mdm-validation_attributes-ReferenceAttribute'></a>
## ReferenceAttribute `type`

##### Namespace

trifenix.connect.mdm.validation_attributes

<a name='M-trifenix-connect-mdm-validation_attributes-ReferenceAttribute-#ctor-System-Type-'></a>
### #ctor(_entityOfReference) `constructor`

##### Summary

Constructor con el tipo de entidad a la que se refiere el id

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _entityOfReference | [System.Type](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Type 'System.Type') | Entidad de la Referencia |

<a name='F-trifenix-connect-mdm-validation_attributes-ReferenceAttribute-entityOfReference'></a>
### entityOfReference `constants`

##### Summary

Tipo de la entidad de referencia

<a name='T-trifenix-connect-mdm_attributes-UniqueAttribute'></a>
## UniqueAttribute `type`

##### Namespace

trifenix.connect.mdm_attributes

##### Summary

Determina si un campo debe ser único, esto permitirá
validarlo en el servidor y entregar metadata al cliente
para que también lo valide.
