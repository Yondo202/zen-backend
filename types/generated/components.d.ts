import type { Schema, Attribute } from '@strapi/strapi';

export interface ColorNg extends Schema.Component {
  collectionName: 'components_color_ng';
  info: {
    displayName: '\u04E8\u043D\u0433\u04E9';
    icon: 'seed';
    description: '';
  };
  attributes: {
    key: Attribute.String & Attribute.Required;
    value: Attribute.String & Attribute.Required;
  };
}

export interface EnquiryConfigCost extends Schema.Component {
  collectionName: 'components_enquiry_config_costs';
  info: {
    displayName: 'cost';
    icon: 'puzzle';
  };
  attributes: {
    calculatedCost: Attribute.Float;
    baseRate: Attribute.Float;
  };
}

export interface EnquiryConfigDateInfo extends Schema.Component {
  collectionName: 'components_enquiry_config_date_infos';
  info: {
    displayName: 'dateInfo';
    icon: 'user';
  };
  attributes: {
    phoneNumber: Attribute.String;
    email: Attribute.Email;
    date: Attribute.String;
  };
}

export interface EnquiryConfigDestination extends Schema.Component {
  collectionName: 'components_enquiry_config_destinations';
  info: {
    displayName: 'destination';
    icon: 'oneToOne';
  };
  attributes: {
    place_name: Attribute.String;
    longitude: Attribute.String;
    state: Attribute.String;
    state_abbreviation: Attribute.String;
    latitude: Attribute.String;
    zipcode: Attribute.String;
  };
}

export interface EnquiryConfigMake extends Schema.Component {
  collectionName: 'components_enquiry_config_makes';
  info: {
    displayName: 'make';
    icon: 'feather';
  };
  attributes: {
    make: Attribute.String;
  };
}

export interface EnquiryConfigModel extends Schema.Component {
  collectionName: 'components_enquiry_config_models';
  info: {
    displayName: 'model';
    icon: 'car';
  };
  attributes: {
    vehicle_id: Attribute.String;
    type: Attribute.String;
    year: Attribute.BigInteger;
    make: Attribute.String;
    model: Attribute.String;
    original_model: Attribute.String;
    fuel_types: Attribute.JSON;
  };
}

export interface EnquiryConfigVehicleInfo extends Schema.Component {
  collectionName: 'components_enquiry_config_vehicle_infos';
  info: {
    displayName: 'vehicleInfo';
    icon: 'typhoon';
  };
  attributes: {
    year: Attribute.BigInteger;
    model: Attribute.Component<'enquiry-config.model'>;
    make: Attribute.Component<'enquiry-config.make'>;
  };
}

export interface EnquiryConfigZipInfo extends Schema.Component {
  collectionName: 'components_enquiry_config_zip_infos';
  info: {
    displayName: 'zipInfo';
    icon: 'expand';
  };
  attributes: {
    source: Attribute.Component<'source.source'>;
    destination: Attribute.Component<'enquiry-config.destination'>;
  };
}

export interface FontSegijnFont extends Schema.Component {
  collectionName: 'components_font_segijn_font';
  info: {
    displayName: '\u04AE\u0441\u044D\u0433\u0438\u0439\u043D \u0444\u043E\u043D\u0442';
    icon: 'bold';
  };
  attributes: {
    key: Attribute.String & Attribute.Required;
    value: Attribute.String & Attribute.Required;
    url: Attribute.Text & Attribute.Required;
    isDefault: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface MainconfigNemeltTohirgoo extends Schema.Component {
  collectionName: 'components_mainconfig_nemelt_tohirgoo';
  info: {
    displayName: '\u041D\u044D\u043C\u044D\u043B\u0442 \u0442\u043E\u0445\u0438\u0440\u0433\u043E\u043E';
    icon: 'plus';
  };
  attributes: {
    thumbnail: Attribute.Text;
    thumbnail_sm: Attribute.Text;
  };
}

export interface ResourceNCz extends Schema.Component {
  collectionName: 'components_resource_n_cz';
  info: {
    displayName: '\u041D\u04E9\u04E9\u0446';
    icon: 'manyToOne';
  };
  attributes: {
    url: Attribute.Text & Attribute.Required;
    type: Attribute.Enumeration<['js', 'css']> & Attribute.Required;
  };
}

export interface SeoGoogleSeo extends Schema.Component {
  collectionName: 'components_seo_google_seos';
  info: {
    displayName: 'google-SEO';
    icon: 'briefcase';
  };
  attributes: {
    seoTitle: Attribute.String;
    seoDescription: Attribute.Text;
    seoMedia: Attribute.Media;
  };
}

export interface SourceSource extends Schema.Component {
  collectionName: 'components_source_sources';
  info: {
    displayName: 'source';
    icon: 'write';
  };
  attributes: {
    place_name: Attribute.String;
    longitude: Attribute.String;
    state: Attribute.String;
    state_abbreviation: Attribute.String;
    latitude: Attribute.String;
    zipcode: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'color.ng': ColorNg;
      'enquiry-config.cost': EnquiryConfigCost;
      'enquiry-config.date-info': EnquiryConfigDateInfo;
      'enquiry-config.destination': EnquiryConfigDestination;
      'enquiry-config.make': EnquiryConfigMake;
      'enquiry-config.model': EnquiryConfigModel;
      'enquiry-config.vehicle-info': EnquiryConfigVehicleInfo;
      'enquiry-config.zip-info': EnquiryConfigZipInfo;
      'font.segijn-font': FontSegijnFont;
      'mainconfig.nemelt-tohirgoo': MainconfigNemeltTohirgoo;
      'resource.n-cz': ResourceNCz;
      'seo.google-seo': SeoGoogleSeo;
      'source.source': SourceSource;
    }
  }
}
