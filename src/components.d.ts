/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppHome {
    }
    interface AppRandom {
        "type": string;
    }
    interface AppRoot {
    }
    interface AppStores {
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppRandomElement extends Components.AppRandom, HTMLStencilElement {
    }
    var HTMLAppRandomElement: {
        prototype: HTMLAppRandomElement;
        new (): HTMLAppRandomElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppStoresElement extends Components.AppStores, HTMLStencilElement {
    }
    var HTMLAppStoresElement: {
        prototype: HTMLAppStoresElement;
        new (): HTMLAppStoresElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-random": HTMLAppRandomElement;
        "app-root": HTMLAppRootElement;
        "app-stores": HTMLAppStoresElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppRandom {
        "type"?: string;
    }
    interface AppRoot {
    }
    interface AppStores {
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-random": AppRandom;
        "app-root": AppRoot;
        "app-stores": AppStores;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-random": LocalJSX.AppRandom & JSXBase.HTMLAttributes<HTMLAppRandomElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-stores": LocalJSX.AppStores & JSXBase.HTMLAttributes<HTMLAppStoresElement>;
        }
    }
}
