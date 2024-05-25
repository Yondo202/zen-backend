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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'color.ng': ColorNg;
      'font.segijn-font': FontSegijnFont;
      'mainconfig.nemelt-tohirgoo': MainconfigNemeltTohirgoo;
      'resource.n-cz': ResourceNCz;
      'seo.google-seo': SeoGoogleSeo;
    }
  }
}
