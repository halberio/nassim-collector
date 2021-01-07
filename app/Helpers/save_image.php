<?php

use Illuminate\Support\Facades\Storage;

function save_image($logo, $path, $disk = "public")
{
  $extension = $logo->extension();
  $name = sha1(\Carbon\Carbon::now());
  $logo->storeAs('/' . $disk . '/' . $path, $name . "." . $extension);
  $logo_url = $path . "" . $name . "." . $extension;
  Storage::url($logo_url);
  return $logo_url;
}
