import { ERE_VISTACOMPROBANTECAB } from "./ERE_VISTACOMPROBANTECAB";
import { ERE_VISTACOMPROBANTEDET } from "./ERE_VISTACOMPROBANTEDET";

export class ERE_VISTACOMPROBANTE {
    public Cabecera: ERE_VISTACOMPROBANTECAB;
    public Detalle: ERE_VISTACOMPROBANTEDET[];
    constructor() { }
}