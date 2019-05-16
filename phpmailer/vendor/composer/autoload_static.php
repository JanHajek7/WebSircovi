<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit07a71619f74b1a4eafc0dc9b0b680efc
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit07a71619f74b1a4eafc0dc9b0b680efc::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit07a71619f74b1a4eafc0dc9b0b680efc::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}