(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={form:"ContactFilter_form__24_f6",label_text:"ContactFilter_label_text__MH9mc",form_input:"ContactFilter_form_input__2S_Lv"}},14:function(t,e,n){t.exports={Container:"Container_Container__2x1IL"}},2:function(t,e,n){t.exports={form:"form_form__10mkU",label_text:"form_label_text__26c0q",form_input:"form_form_input__3ptVP",add_button:"form_add_button__15Rj8"}},29:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(12),o=n.n(c),i=n(15),s=n(6),l=n(7),u=n(9),m=n(8),d=n(13),b=n(3),f=n.n(b),h=n(2),_=n.n(h),j=n(0),p=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.nameInputId=f.a.generate(),t.numberInputId=f.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(d.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.number,n=t.name;return Object(j.jsxs)("form",{className:_.a.form,onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{className:_.a.label_text,htmlFor:this.nameInputId,children:["Name ",Object(j.jsx)("input",{className:_.a.form_input,type:"text",onChange:this.handleChange,value:n,name:"name",id:this.nameInputId,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(j.jsxs)("label",{className:_.a.label_text,htmlFor:this.numberInputId,children:["Number ",Object(j.jsx)("input",{className:_.a.form_input,type:"tell",onChange:this.handleChange,value:e,name:"number",id:this.numberInputId,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)("button",{className:_.a.add_button,type:"submit",children:" Add contact "})]})}}]),n}(a.Component),C=n(4),x=n.n(C),O=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:x.a.contactList,children:e.map((function(t){var e=t.name,a=t.id,r=t.number;return Object(j.jsxs)("li",{className:x.a.contactItem,children:[Object(j.jsxs)("p",{className:x.a.contactName,children:[e,": ",r]}),Object(j.jsx)("button",{className:x.a.deleteBtm,onClick:function(){return n(a)},children:"Delete"})]},a)}))})},v=n(10),g=n.n(v),N=function(t){var e=t.value,n=t.onChange;return Object(j.jsx)("form",{className:g.a.form,children:Object(j.jsxs)("label",{className:g.a.label_text,children:["Phone book search",Object(j.jsx)("input",{className:g.a.form_input,type:"text",value:e,onChange:n})]})})},I=n(14),S=n.n(I),y=function(t){var e=t.children;return Object(j.jsxs)("div",{className:S.a.Container,children:[" ",e," "]})},A=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmitHandler=function(t){return t},t.addContact=function(e){var n=e;return t.state.contacts.some((function(t){return t.name===n.name}))?alert("".concat(n.name," is already in contacts.")):(n.id=f.a.generate(),t.setState((function(t){return{contacts:[n].concat(Object(i.a)(t.contacts))}})))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.filrerContact=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,r=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(r)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(j.jsxs)(y,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(p,{onAddContact:this.addContact}),Object(j.jsx)(N,{value:t,onChange:this.filrerContact}),Object(j.jsx)(O,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(A,{})}),document.getElementById("root"))},4:function(t,e,n){t.exports={contactList:"ContactList_contactList__I3SFu",contactItem:"ContactList_contactItem__sGEJ9",contactName:"ContactList_contactName__3XHzA",deleteBtm:"ContactList_deleteBtm__2fGLh"}}},[[29,1,2]]]);
//# sourceMappingURL=main.f64663f1.chunk.js.map