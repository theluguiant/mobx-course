import { observable, computed, action, autorun, toJS } from 'mobx';
import { Injectable } from '@angular/core';

export class Pearson {
   @observable Pearson: any;
   @observable Value = '';

   public pearson: any;

   @action setPearsons(value: any) {
        this.Pearson = value;
   }

   @computed get getPearsons() {
    return this.Pearson;
   }

   @action setValue(value: any) {
        this.Value = value;
   }

   @computed get getValue() {
       return this.Value;
   }
  
   @computed get searchByName() {
        if (this.getValue.length !== 0) {
            this.pearson = this.getPearsons.filter((item) => {
                return item.name.toLowerCase().includes(this.getValue.toLowerCase());
            });
            return this.pearson;
        }
        return this.getPearsons;
   }

   constructor(){}

  
};
