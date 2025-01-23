<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class StoreClientsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'name.required' => 'A name is required.',
            'name.regex' => 'The name must not include numbers or special characters.',
            'surname.required' => 'A surname is required.',
            'surname.regex' => 'The surname must not include numbers or special characters',
            'email.required' => 'Please, insert an email.',
            'email.email' => 'Please insert a valid email',
            'phone_number.required' => 'Please, insert a phone number.',
            'phone_number.regex' => 'Please, insert a valid phone number',
            'img_url.image' => 'The file must be an image',
            'img_url.size' => 'The image must be less than 10MB'
        ];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'regex:/^[\p{L} ]+$/u', 'max:255'],
            'surname' => ['required', 'string', 'regex:/^[\p{L} ]+$/u', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone_number' => ['required', 'regex:/^(\+?\d{1,3}[- ]?)?\(?\d{1,4}?\)?[- ]?\d{1,4}[- ]?\d{1,9}$/', 'max:200'],
            'img_url' => ['image', 'max:10240'],
            'username' => ['required', 'string', 'max:255', Rule::unique('clients', 'username')],
            'password' => ['required', 'string', 'max:255'],
            'confirmPassword' => ['required', 'string', 'max:255', 'same:password']
        ];
    }

    /*
    *   The name => regex is to avoid numbers or special characters.
    *   The phone_number => regex in used to validate phone numbers.
    *       - This phone numbers may include the contry code.
    */
}
