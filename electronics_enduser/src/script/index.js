if (typeof window !== 'undefined') {
    import('jquery').then(($) => {
      window.$ = window.jQuery = $;
    //   import('bootstrap/dist/js/bootstrap.bundle.min.js');
    //   //import('./bootstrap-4-navbar');
    //     import('./default');
    //     import('./function.js')
    //     import('./banner.js')
    //     import('./windowResize.js')
    //     import('./report.js')
    //     import('./getScript.js')
    //     import('./coreShared.min.js')
    //     import('./product-countDown.js')
    //     import('./product-home.js')
    });

}

