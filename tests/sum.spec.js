

import { describe, expect, test,it, } from "vitest";
import { sum } from "../sum";

describe("probar que la funcion sum funcione para 1 + 1",()=>{
    it('typef func equal to funciton',()=>{
        expect(typeof sum).toBe('function')
    })
    it('error si no le pasas argumento',()=>{
        expect(()=>sum()).toThrow();
    })
})