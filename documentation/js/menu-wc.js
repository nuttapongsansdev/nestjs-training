'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-training documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-b0c68c679c06e41c3333f87e2d15626e0bfbc3da1713676eec331342a5ffe4cccd311913fe619917fb4f90a37a5e369f7c7bf5b793024c2ea453a33908de8534"' : 'data-bs-target="#xs-controllers-links-module-AppModule-b0c68c679c06e41c3333f87e2d15626e0bfbc3da1713676eec331342a5ffe4cccd311913fe619917fb4f90a37a5e369f7c7bf5b793024c2ea453a33908de8534"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-b0c68c679c06e41c3333f87e2d15626e0bfbc3da1713676eec331342a5ffe4cccd311913fe619917fb4f90a37a5e369f7c7bf5b793024c2ea453a33908de8534"' :
                                            'id="xs-controllers-links-module-AppModule-b0c68c679c06e41c3333f87e2d15626e0bfbc3da1713676eec331342a5ffe4cccd311913fe619917fb4f90a37a5e369f7c7bf5b793024c2ea453a33908de8534"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-b0c68c679c06e41c3333f87e2d15626e0bfbc3da1713676eec331342a5ffe4cccd311913fe619917fb4f90a37a5e369f7c7bf5b793024c2ea453a33908de8534"' : 'data-bs-target="#xs-injectables-links-module-AppModule-b0c68c679c06e41c3333f87e2d15626e0bfbc3da1713676eec331342a5ffe4cccd311913fe619917fb4f90a37a5e369f7c7bf5b793024c2ea453a33908de8534"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-b0c68c679c06e41c3333f87e2d15626e0bfbc3da1713676eec331342a5ffe4cccd311913fe619917fb4f90a37a5e369f7c7bf5b793024c2ea453a33908de8534"' :
                                        'id="xs-injectables-links-module-AppModule-b0c68c679c06e41c3333f87e2d15626e0bfbc3da1713676eec331342a5ffe4cccd311913fe619917fb4f90a37a5e369f7c7bf5b793024c2ea453a33908de8534"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-7a56f1c3a6a57d0d4516ed4a5083e617b655854892fdc93e8fb5b7aca8c0b024e7a48f31a33d3c3f0841a40949072d816ccde5c3f6c8efa2d0564cfb25de9764"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-7a56f1c3a6a57d0d4516ed4a5083e617b655854892fdc93e8fb5b7aca8c0b024e7a48f31a33d3c3f0841a40949072d816ccde5c3f6c8efa2d0564cfb25de9764"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-7a56f1c3a6a57d0d4516ed4a5083e617b655854892fdc93e8fb5b7aca8c0b024e7a48f31a33d3c3f0841a40949072d816ccde5c3f6c8efa2d0564cfb25de9764"' :
                                        'id="xs-injectables-links-module-AuthModule-7a56f1c3a6a57d0d4516ed4a5083e617b655854892fdc93e8fb5b7aca8c0b024e7a48f31a33d3c3f0841a40949072d816ccde5c3f6c8efa2d0564cfb25de9764"' }>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LogModule.html" data-type="entity-link" >LogModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MongodbConfigModule.html" data-type="entity-link" >MongodbConfigModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MongodbConfigModule-1c6170a8314eb222c071b8a01bd9010f98b72ce6b1ce57f48c4bf540a5392c695c73c7b58edd6c765ebfe3eb195bdc87fc74759bfee2801c8253fcd16851f790"' : 'data-bs-target="#xs-injectables-links-module-MongodbConfigModule-1c6170a8314eb222c071b8a01bd9010f98b72ce6b1ce57f48c4bf540a5392c695c73c7b58edd6c765ebfe3eb195bdc87fc74759bfee2801c8253fcd16851f790"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MongodbConfigModule-1c6170a8314eb222c071b8a01bd9010f98b72ce6b1ce57f48c4bf540a5392c695c73c7b58edd6c765ebfe3eb195bdc87fc74759bfee2801c8253fcd16851f790"' :
                                        'id="xs-injectables-links-module-MongodbConfigModule-1c6170a8314eb222c071b8a01bd9010f98b72ce6b1ce57f48c4bf540a5392c695c73c7b58edd6c765ebfe3eb195bdc87fc74759bfee2801c8253fcd16851f790"' }>
                                        <li class="link">
                                            <a href="injectables/MongodbConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MongodbConfigService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MongodbProviderModule.html" data-type="entity-link" >MongodbProviderModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PostgresConfigModule.html" data-type="entity-link" >PostgresConfigModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostgresConfigModule-741d9e5f5f487b34e727ba2c3b6713bd4f1ed96f52b028ef330fac4a4e2d1b71b3f4a5ab0bacc76c348166eed958004e5c3515b3a5b745bce92e09dc63c56437"' : 'data-bs-target="#xs-injectables-links-module-PostgresConfigModule-741d9e5f5f487b34e727ba2c3b6713bd4f1ed96f52b028ef330fac4a4e2d1b71b3f4a5ab0bacc76c348166eed958004e5c3515b3a5b745bce92e09dc63c56437"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostgresConfigModule-741d9e5f5f487b34e727ba2c3b6713bd4f1ed96f52b028ef330fac4a4e2d1b71b3f4a5ab0bacc76c348166eed958004e5c3515b3a5b745bce92e09dc63c56437"' :
                                        'id="xs-injectables-links-module-PostgresConfigModule-741d9e5f5f487b34e727ba2c3b6713bd4f1ed96f52b028ef330fac4a4e2d1b71b3f4a5ab0bacc76c348166eed958004e5c3515b3a5b745bce92e09dc63c56437"' }>
                                        <li class="link">
                                            <a href="injectables/PostgresConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostgresConfigService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostgresProviderModule.html" data-type="entity-link" >PostgresProviderModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/StatusModule.html" data-type="entity-link" >StatusModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-StatusModule-dc97a28277ed90d7e247524f6a74a8fe3bc10e01c71dca58cf325cb6baad466d096a10e7d50c5e32b426697da4eb73edae4659e5b640c442d91d3d6ab2c55253"' : 'data-bs-target="#xs-controllers-links-module-StatusModule-dc97a28277ed90d7e247524f6a74a8fe3bc10e01c71dca58cf325cb6baad466d096a10e7d50c5e32b426697da4eb73edae4659e5b640c442d91d3d6ab2c55253"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-StatusModule-dc97a28277ed90d7e247524f6a74a8fe3bc10e01c71dca58cf325cb6baad466d096a10e7d50c5e32b426697da4eb73edae4659e5b640c442d91d3d6ab2c55253"' :
                                            'id="xs-controllers-links-module-StatusModule-dc97a28277ed90d7e247524f6a74a8fe3bc10e01c71dca58cf325cb6baad466d096a10e7d50c5e32b426697da4eb73edae4659e5b640c442d91d3d6ab2c55253"' }>
                                            <li class="link">
                                                <a href="controllers/StatusController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatusController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-StatusModule-dc97a28277ed90d7e247524f6a74a8fe3bc10e01c71dca58cf325cb6baad466d096a10e7d50c5e32b426697da4eb73edae4659e5b640c442d91d3d6ab2c55253"' : 'data-bs-target="#xs-injectables-links-module-StatusModule-dc97a28277ed90d7e247524f6a74a8fe3bc10e01c71dca58cf325cb6baad466d096a10e7d50c5e32b426697da4eb73edae4659e5b640c442d91d3d6ab2c55253"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StatusModule-dc97a28277ed90d7e247524f6a74a8fe3bc10e01c71dca58cf325cb6baad466d096a10e7d50c5e32b426697da4eb73edae4659e5b640c442d91d3d6ab2c55253"' :
                                        'id="xs-injectables-links-module-StatusModule-dc97a28277ed90d7e247524f6a74a8fe3bc10e01c71dca58cf325cb6baad466d096a10e7d50c5e32b426697da4eb73edae4659e5b640c442d91d3d6ab2c55253"' }>
                                        <li class="link">
                                            <a href="injectables/StatusService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatusService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TaskModule.html" data-type="entity-link" >TaskModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TaskModule-80eec0d530bb65473050cfb4b296ca080bb7e1eb3e7aa065f2d3eb02f463741c750a79c516cdbce4a00a28ec11bb681b0e1eedd4d14633aa4eec708d30a4ff32"' : 'data-bs-target="#xs-controllers-links-module-TaskModule-80eec0d530bb65473050cfb4b296ca080bb7e1eb3e7aa065f2d3eb02f463741c750a79c516cdbce4a00a28ec11bb681b0e1eedd4d14633aa4eec708d30a4ff32"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TaskModule-80eec0d530bb65473050cfb4b296ca080bb7e1eb3e7aa065f2d3eb02f463741c750a79c516cdbce4a00a28ec11bb681b0e1eedd4d14633aa4eec708d30a4ff32"' :
                                            'id="xs-controllers-links-module-TaskModule-80eec0d530bb65473050cfb4b296ca080bb7e1eb3e7aa065f2d3eb02f463741c750a79c516cdbce4a00a28ec11bb681b0e1eedd4d14633aa4eec708d30a4ff32"' }>
                                            <li class="link">
                                                <a href="controllers/TaskController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TaskModule-80eec0d530bb65473050cfb4b296ca080bb7e1eb3e7aa065f2d3eb02f463741c750a79c516cdbce4a00a28ec11bb681b0e1eedd4d14633aa4eec708d30a4ff32"' : 'data-bs-target="#xs-injectables-links-module-TaskModule-80eec0d530bb65473050cfb4b296ca080bb7e1eb3e7aa065f2d3eb02f463741c750a79c516cdbce4a00a28ec11bb681b0e1eedd4d14633aa4eec708d30a4ff32"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TaskModule-80eec0d530bb65473050cfb4b296ca080bb7e1eb3e7aa065f2d3eb02f463741c750a79c516cdbce4a00a28ec11bb681b0e1eedd4d14633aa4eec708d30a4ff32"' :
                                        'id="xs-injectables-links-module-TaskModule-80eec0d530bb65473050cfb4b296ca080bb7e1eb3e7aa065f2d3eb02f463741c750a79c516cdbce4a00a28ec11bb681b0e1eedd4d14633aa4eec708d30a4ff32"' }>
                                        <li class="link">
                                            <a href="injectables/TaskService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-c7ccfa423d77843bcbe50ec2db3da833431d1a8ea61340fc146e5d62e8906574c29ba9e34d8c3fd30cc279ad3036e2cbf1707f67dabc88747ecd82ad96f4842d"' : 'data-bs-target="#xs-controllers-links-module-UserModule-c7ccfa423d77843bcbe50ec2db3da833431d1a8ea61340fc146e5d62e8906574c29ba9e34d8c3fd30cc279ad3036e2cbf1707f67dabc88747ecd82ad96f4842d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-c7ccfa423d77843bcbe50ec2db3da833431d1a8ea61340fc146e5d62e8906574c29ba9e34d8c3fd30cc279ad3036e2cbf1707f67dabc88747ecd82ad96f4842d"' :
                                            'id="xs-controllers-links-module-UserModule-c7ccfa423d77843bcbe50ec2db3da833431d1a8ea61340fc146e5d62e8906574c29ba9e34d8c3fd30cc279ad3036e2cbf1707f67dabc88747ecd82ad96f4842d"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-c7ccfa423d77843bcbe50ec2db3da833431d1a8ea61340fc146e5d62e8906574c29ba9e34d8c3fd30cc279ad3036e2cbf1707f67dabc88747ecd82ad96f4842d"' : 'data-bs-target="#xs-injectables-links-module-UserModule-c7ccfa423d77843bcbe50ec2db3da833431d1a8ea61340fc146e5d62e8906574c29ba9e34d8c3fd30cc279ad3036e2cbf1707f67dabc88747ecd82ad96f4842d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-c7ccfa423d77843bcbe50ec2db3da833431d1a8ea61340fc146e5d62e8906574c29ba9e34d8c3fd30cc279ad3036e2cbf1707f67dabc88747ecd82ad96f4842d"' :
                                        'id="xs-injectables-links-module-UserModule-c7ccfa423d77843bcbe50ec2db3da833431d1a8ea61340fc146e5d62e8906574c29ba9e34d8c3fd30cc279ad3036e2cbf1707f67dabc88747ecd82ad96f4842d"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/LogEntity.html" data-type="entity-link" >LogEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/StatusEntity.html" data-type="entity-link" >StatusEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/TaskEntity.html" data-type="entity-link" >TaskEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/UserEnity.html" data-type="entity-link" >UserEnity</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AssignMembersTaskDTO.html" data-type="entity-link" >AssignMembersTaskDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateStatusDTO.html" data-type="entity-link" >CreateStatusDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTaskDTO.html" data-type="entity-link" >CreateTaskDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/LogService.html" data-type="entity-link" >LogService</a>
                            </li>
                            <li class="link">
                                <a href="classes/MemberDTO.html" data-type="entity-link" >MemberDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/MemberTask.html" data-type="entity-link" >MemberTask</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterDTO.html" data-type="entity-link" >RegisterDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskListFilterDTO.html" data-type="entity-link" >TaskListFilterDTO</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});