import React, { useEffect, useState } from 'react';
import { hgRequest } from '@libs/request';

export const useProperty = () => {
    let results = new Promise(function(resolve, reject){
        hgRequest(`/mocks/property.json`).then(res => {
          resolve(res)
        })
    })
    return results;
}