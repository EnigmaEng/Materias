<?php

class Session
{
    private $userModel;

    function __construct($userModel)
    {
        $this->userModel = $userModel;
    }

    function getUserModel()
    {
        return $this->userModel;
    }
    
    function logout()
    {
        session_start();
        session_destroy();
    }
}
