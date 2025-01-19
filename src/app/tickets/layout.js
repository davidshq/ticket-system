import TenantName from "./TenantName";
import Nav from "./Nav";

export default function TicketsLayout(pageProps) {
  return (
   <>
    <section style={{ borderBottom: "1px solid gray"}}>
      <TenantName tenantName="Packt" />
      <Nav />
    </section>
    <section>{pageProps.children}</section>
   </> 
  );
}