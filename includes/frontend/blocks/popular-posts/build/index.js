!function(){"use strict";var e={n:function(t){var l=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(l,{a:l}),l},d:function(t,l){for(var o in l)e.o(l,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:l[o]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.wp.blocks,l=window.wp.element,o=window.wp.i18n,n=window.wp.serverSideRender,a=e.n(n),r=window.wp.blockEditor,p=window.wp.components;(0,t.registerBlockType)("top-10/popular-posts",{edit:function(e){let{attributes:t,setAttributes:n}=e;const{heading:_,daily:s,daily_range:u,hour_range:i,limit:c,offset:d,show_excerpt:h,show_author:m,show_date:b,disp_list_count:E,tptn_styles:f,post_thumb_op:w,other_attributes:g}=t,y=(0,r.useBlockProps)();return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(r.InspectorControls,null,(0,l.createElement)(p.PanelBody,{title:(0,o.__)("Popular Posts Settings","top-10"),initialOpen:!0},(0,l.createElement)(p.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(p.ToggleControl,{label:(0,o.__)("Show heading","top-10"),help:_?(0,o.__)("Heading displayed","top-10"):(0,o.__)("No Heading displayed","top-10"),checked:_,onChange:()=>{n({heading:!_})}}))),(0,l.createElement)(p.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(p.ToggleControl,{label:(0,o.__)("Custom period?","top-10"),help:s?(0,o.__)("Set range below","top-10"):(0,o.__)("Overall popular posts will be shown","top-10"),checked:s,onChange:()=>{n({daily:!s})}}))),(0,l.createElement)(p.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(p.TextControl,{label:(0,o.__)("Daily range","top-10"),value:u,onChange:e=>{n({daily_range:void 0===e?"":e})},help:(0,o.__)("Number of days","top-10")}))),(0,l.createElement)(p.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(p.TextControl,{label:(0,o.__)("Hour range","top-10"),value:i,onChange:e=>{n({hour_range:void 0===e?"":e})},help:(0,o.__)("Number of hours","top-10")}))),(0,l.createElement)(p.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(p.TextControl,{label:(0,o.__)("Number of posts","top-10"),value:c,onChange:e=>{n({limit:void 0===e?"":e})},help:(0,o.__)("Maximum number of posts to display","top-10")}))),(0,l.createElement)(p.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(p.TextControl,{label:(0,o.__)("Offset","top-10"),value:d,onChange:e=>{n({offset:void 0===e?"":e})},help:(0,o.__)("Number of posts to skip from the top","top-10")}))),(0,l.createElement)(p.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(p.ToggleControl,{label:(0,o.__)("Show excerpt","top-10"),help:h?(0,o.__)("Excerpt displayed","top-10"):(0,o.__)("No excerpt","top-10"),checked:h,onChange:()=>{n({show_excerpt:!h})}}))),(0,l.createElement)(p.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(p.ToggleControl,{label:(0,o.__)("Show author","top-10"),help:m?(0,o.__)('"by Author Name" displayed',"top-10"):(0,o.__)("No author displayed","top-10"),checked:m,onChange:()=>{n({show_author:!m})}}))),(0,l.createElement)(p.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(p.ToggleControl,{label:(0,o.__)("Show date","top-10"),help:b?(0,o.__)("Date of post displayed","top-10"):(0,o.__)("Date of post not displayed","top-10"),checked:b,onChange:()=>{n({show_date:!b})}}))),(0,l.createElement)(p.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(p.ToggleControl,{label:(0,o.__)("Show count","top-10"),help:E?(0,o.__)("Display number of visits","top-10"):(0,o.__)("Number of visits hidden","top-10"),checked:E,onChange:()=>{n({disp_list_count:!E})}}))),(0,l.createElement)(p.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(p.SelectControl,{label:(0,o.__)("Styles","top-10"),value:f,onChange:e=>{n({tptn_styles:e})},help:(0,o.__)("Select the style of the Popular Posts","top-10"),options:[{value:"no_style",label:(0,o.__)("No styles","top-10")},{value:"text_only",label:(0,o.__)("Text only","top-10")},{value:"left_thumbs",label:(0,o.__)("Left thumbnails","top-10")}]}))),(0,l.createElement)(p.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(p.SelectControl,{label:(0,o.__)("Thumbnail option","top-10"),value:w,onChange:e=>{n({post_thumb_op:e})},help:(0,o.__)("Location of the post thumbnail","top-10"),options:[{value:"inline",label:(0,o.__)("Before title","top-10")},{value:"after",label:(0,o.__)("After title","top-10")},{value:"thumbs_only",label:(0,o.__)("Only thumbnail","top-10")},{value:"text_only",label:(0,o.__)("Only text","top-10")}]}))),(0,l.createElement)(p.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(p.TextareaControl,{label:(0,o.__)("Other attributes","top-10"),value:g,onChange:e=>{n({other_attributes:void 0===e?"":e})},help:(0,o.__)("Enter other attributes in a URL-style string-query. e.g. post_types=post,page&link_nofollow=1&exclude_post_ids=5,6","top-10")}))))),(0,l.createElement)("div",y,(0,l.createElement)(p.Disabled,null,(0,l.createElement)(a(),{block:"top-10/popular-posts",attributes:t,urlQueryArgs:{_locale:"site"}}))))},save(){return null}})}();