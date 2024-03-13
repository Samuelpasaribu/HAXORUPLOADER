<?php
// Set folder upload
$target_dir = "uploads/";

// Jika folder uploads belum ada, coba buat
if (!file_exists($target_dir)) {
    mkdir($target_dir, 0777, true);
}

// Get the file name
$filename = htmlspecialchars(basename($_FILES["fileprinsley"]["name"]));

// Set the target file path
$target_file = $target_dir . $filename;

// Check if file already exists
if (file_exists($target_file)) {
    echo "Sorry, file already exists.";
    exit;
}

// Check file size
if ($_FILES["fileprinsley"]["size"] > 50000) {
    echo "Sorry, your file is too large.";
    exit;
}

// Allow only certain file formats
$allowed_extensions = array("html", "htm");
$file_extension = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
if (!in_array($file_extension, $allowed_extensions)) {
    echo "Sorry, only HTML files are allowed.";
    exit;
}

// Try to upload file
if (move_uploaded_file($_FILES["fileprinsley"]["tmp_name"], $target_file)) {
    echo "The file " . htmlspecialchars($filename) . " has been uploaded.";
} else {
    echo "Sorry, there was an error uploading your file.";
}
?>
