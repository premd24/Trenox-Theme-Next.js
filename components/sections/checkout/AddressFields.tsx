import { countries } from "@/data/countries";

type AddressFieldsProps = {
  /** Prefixes the Webflow classes and ids. */
  kind: "shipping" | "billing";
  defaultCountry?: string;
};

/** Name, street, city/state/zip row and country — the shipping and billing address blocks. */
export default function AddressFields({ kind, defaultCountry }: AddressFieldsProps) {
  const cls = (field: string) => `wf-commerce-commercecheckout${kind}${field}`;
  const id = (field: string) => `wf-ecom-${kind}-${field}`;

  return (
    <fieldset className="wf-commerce-commercecheckoutblockcontent">
      <label className="wf-commerce-commercecheckoutlabel" htmlFor={id("name")}>
        Full Name *
      </label>
      <input className={cls("fullname")} id={id("name")} name="name" required type="text" />
      <label className="wf-commerce-commercecheckoutlabel" htmlFor={id("address")}>
        Street Address *
      </label>
      <input className={cls("streetaddress")} id={id("address")} name="address_line1" required type="text" />
      <input
        aria-label={`${kind === "shipping" ? "Shipping" : "Billing"} address optional`}
        className={cls("streetaddressoptional")}
        name="address_line2"
        type="text"
      />
      <div className="wf-commerce-commercecheckoutrow">
        <div className="wf-commerce-commercecheckoutcolumn">
          <label className="wf-commerce-commercecheckoutlabel" htmlFor={id("city")}>
            City *
          </label>
          <input className={cls("city")} id={id("city")} name="address_city" required type="text" />
        </div>
        <div className="wf-commerce-commercecheckoutcolumn">
          <label className="wf-commerce-commercecheckoutlabel" htmlFor={id("state")}>
            State/Province
          </label>
          <input className={cls("stateprovince")} id={id("state")} name="address_state" type="text" />
        </div>
        <div className="wf-commerce-commercecheckoutcolumn">
          <label className="wf-commerce-commercecheckoutlabel" htmlFor={id("zip")}>
            Zip/Postal Code *
          </label>
          <input className={cls("zippostalcode")} id={id("zip")} name="address_zip" required type="text" />
        </div>
      </div>
      <label className="wf-commerce-commercecheckoutlabel" htmlFor={id("country")}>
        Country *
      </label>
      <select className={cls("countryselector")} defaultValue={defaultCountry} id={id("country")} name="address_country">
        {countries.map(([code, name]) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
    </fieldset>
  );
}
