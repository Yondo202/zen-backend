import type { Schema, Attribute } from '@strapi/strapi';

export interface EnquiryConfigCost extends Schema.Component {
  collectionName: 'components_enquiry_config_costs';
  info: {
    displayName: 'cost';
    icon: 'puzzle';
    description: '';
  };
  attributes: {
    calculatedCost: Attribute.Float;
    baseRate: Attribute.Float;
    mile: Attribute.Float;
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

export interface WebsiteContentsChildContents extends Schema.Component {
  collectionName: 'components_website_contents_child_contents';
  info: {
    displayName: 'Child-contents';
    icon: 'filter';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    TAG: Attribute.String;
  };
}

export interface WebsiteContentsContent extends Schema.Component {
  collectionName: 'components_website_contents_contents';
  info: {
    displayName: 'OurService';
    icon: 'cube';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    TAG: Attribute.String;
    cards: Attribute.Component<'website-contents.child-contents', true>;
  };
}

export interface WebsiteContentsCustomerFeedback extends Schema.Component {
  collectionName: 'components_website_contents_customer_feedbacks';
  info: {
    displayName: 'CustomerFeedback';
    icon: 'database';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    customer_name: Attribute.String;
    image: Attribute.Media;
  };
}

export interface WebsiteContentsHomeContent extends Schema.Component {
  collectionName: 'components_website_contents_home_contents';
  info: {
    displayName: 'Home content';
    icon: 'grid';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    sub_title: Attribute.String;
  };
}

export interface WebsiteContentsHowItWorks extends Schema.Component {
  collectionName: 'components_website_contents_how_it_works';
  info: {
    displayName: 'HowItWorks';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    cards: Attribute.Component<'website-contents.child-contents', true>;
    sub_title: Attribute.String;
  };
}

export interface WebsiteContentsPagesHeader extends Schema.Component {
  collectionName: 'components_website_contents_pages_headers';
  info: {
    displayName: 'PagesHeader';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    background: Attribute.Media;
  };
}

export interface WebsiteContentsTrustedPartner extends Schema.Component {
  collectionName: 'components_website_contents_trusted_partners';
  info: {
    displayName: 'TrustedPartner';
    icon: 'crop';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    TAG: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'enquiry-config.cost': EnquiryConfigCost;
      'enquiry-config.date-info': EnquiryConfigDateInfo;
      'enquiry-config.destination': EnquiryConfigDestination;
      'enquiry-config.make': EnquiryConfigMake;
      'enquiry-config.model': EnquiryConfigModel;
      'enquiry-config.vehicle-info': EnquiryConfigVehicleInfo;
      'enquiry-config.zip-info': EnquiryConfigZipInfo;
      'resource.n-cz': ResourceNCz;
      'source.source': SourceSource;
      'website-contents.child-contents': WebsiteContentsChildContents;
      'website-contents.content': WebsiteContentsContent;
      'website-contents.customer-feedback': WebsiteContentsCustomerFeedback;
      'website-contents.home-content': WebsiteContentsHomeContent;
      'website-contents.how-it-works': WebsiteContentsHowItWorks;
      'website-contents.pages-header': WebsiteContentsPagesHeader;
      'website-contents.trusted-partner': WebsiteContentsTrustedPartner;
    }
  }
}
